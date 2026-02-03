"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import { countryList } from "../../../context/useCountriesDetails";
import { useLocationDetail } from "../../../context/useLocationDetail";
import { toast } from "react-toastify";
import Select from "react-select";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { usePathname, useSearchParams } from "next/navigation";

// Blocked fake/temporary email domains
const BLOCKED_EMAIL_DOMAINS = [
    "yopmail.com",
    "yopmail.fr",
    "yopmail.net",
    "mailinator.com",
    "guerrillamail.com",
    "guerrillamailblock.com",
    "10minutemail.com",
    "tempmail.com",
    "throwaway.email",
    "temp-mail.org",
    "mohmal.com",
    "trashmail.com",
    "maildrop.cc",
    "tempail.com",
    "getnada.com",
    "mintemail.com",
    "mytrashmail.com",
    "sharklasers.com",
    "spamgourmet.com",
    "mailnesia.com",
    "meltmail.com",
    "mailcatch.com",
    "emailondeck.com",
    "fakeinbox.com",
    "dispostable.com",
    "emailfake.com",
    "getairmail.com",
    "mailin8r.com",
    "mailme.lv",
    "tempr.email",
    "tmpmail.org",
    "mail.tm",
    "emailnator.com",
];

const selectStyles = {
    control: (base, state) => ({
        ...base,
        backgroundColor: "#fff",
        color: "#000",
        borderColor: state.isFocused ? "#2E59D9" : "#E5E7EB",
        boxShadow: "none",
        ":hover": { borderColor: "#2E59D9" },
        minHeight: 46,
    }),
    valueContainer: (base) => ({ ...base, color: "#000" }),
    singleValue: (base) => ({ ...base, color: "#000" }),
    input: (base) => ({ ...base, color: "#000" }),
    placeholder: (base) => ({ ...base, color: "#B6BCC8" }),
    menu: (base) => ({
        ...base,
        backgroundColor: "#fff",
        color: "#000",
        zIndex: 9999,
    }),
    menuList: (base) => ({ ...base, backgroundColor: "#fff" }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected
            ? "#e5e7eb"
            : state.isFocused
                ? "#f3f4f6"
                : "#fff",
        color: "#000",
        ":active": { backgroundColor: "#e5e7eb" },
    }),
    indicatorSeparator: (base) => ({ ...base, backgroundColor: "#e5e7eb" }),
    dropdownIndicator: (base, state) => ({
        ...base,
        color: state.isFocused ? "#2E59D9" : "#9CA3AF",
        ":hover": { color: "#2E59D9" },
    }),
};

export default function NewFormDesign({ isIb = false }) {
    const { countryData } = useLocationDetail();
    const [phoneOtpLoading, setPhoneOtpLoading] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [otpPhoneNumber, setOtpPhoneNumber] = useState("");
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const params = useSearchParams();
    const campaign = params.get("utm_source");
    const fbclid = params.get("fbclid");
    const path = usePathname();
    const router = useRouter();
    const t = useTranslations("home.form");
    const locale = useLocale();

    // prepare country options
    const options = countryList?.map((item) => ({
        value: item.alpha_2_code,
        label: (
            <div className="flex items-center gap-2">
                <img
                    src={`https://flagcdn.com/w40/${item.alpha_2_code.toLowerCase()}.png`}
                    alt={item.en_short_name}
                    className="w-5 h-4 object-cover"
                />
                <span>{item.en_short_name}</span>
            </div>
        ),
    }));

    // formik setup
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            otp: "",
            terms: false,
            fbclid: "",
            utm_campaign: "",
            utm_source: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required")
                .test(
                    "no-plus-sign",
                    "Email address cannot contain '+'",
                    (value) => !value || !value.includes("+")
                )
                .test(
                    "blocked-domain",
                    "This email domain is not allowed. Please use a valid email address.",
                    (value) => {
                        if (!value) return true;
                        const emailDomain = value.split("@")[1]?.toLowerCase();
                        return !BLOCKED_EMAIL_DOMAINS.includes(emailDomain);
                    }
                ),
            phone: Yup.string()
                .required("Phone number is required")
                .test("is-valid-e164", "Invalid phone number", (value) => {
                    if (!value) return false;
                    return isValidPhoneNumber(value);
                })
                .test(
                    "matches-selected-country",
                    "Number doesn't match selected country",
                    function (value) {
                        const selectedCountryCode = this.parent.country;
                        if (!value || !selectedCountryCode) return true;
                        const pn = parsePhoneNumberFromString(value);
                        if (!pn) return false;
                        return pn.country === selectedCountryCode;
                    }
                ),
            country: Yup.string().required("Country is required"),
            otp: Yup.string()
                .length(6, "OTP must be 6 digits")
                .required("OTP is required"),
            terms: Yup.bool().oneOf([true], "You must accept the terms"),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            // Check if OTP is verified before proceeding
            if (!isOtpVerified) {
                toast.error(
                    "Please verify your phone number with OTP before submitting."
                );
                setLoading(false);
                return;
            }

            try {
                // Validate email first
                const validationResponse = await axios.post(`/api/validate-email`, {
                    email: formik.values.email,
                });

                if (!validationResponse.data.valid) {
                    toast.error("Invalid email address. Please use a valid email.");
                    setLoading(false);
                    return;
                }

                // Send to Zapier
                try {
                    await axios.post(
                        "https://hooks.zapier.com/hooks/catch/16420445/uwaumm0/",
                        JSON.stringify({
                            nickname: values.firstName,
                            lastName: values.lastName,
                            email: values.email,
                            phone: values.phone,
                            country: values.country,
                            offer: values.offer,
                            locale: locale,
                            fbclid: values.fbclid,
                            utm_campaign: values.utm_campaign,
                            utm_source: values.utm_source,
                        })
                    );
                } catch (zapierError) {
                    console.error("Zapier webhook failed:", zapierError);
                    // Continue even if Zapier fails, but log it
                }

                toast.success("Thank you! We'll be in touch soon.");
                localStorage.setItem("user", JSON.stringify({ ...values }));
                formik.resetForm();
                setIsOtpVerified(false);
            } catch (err) {
                console.error("Form submission error:", err);
                toast.error(
                    err?.response?.data?.message || err?.message || "Something went wrong"
                );
            } finally {
                setLoading(false);
            }
        },
    });

    // Set country and UTM params after formik is initialized
    useEffect(() => {
        if (countryData?.country) {
            const filterData = countryList.find(
                (item) =>
                    item?.en_short_name == countryData.country ||
                    item?.alpha_2_code == countryData.country
            );
            formik.setFieldValue(
                "country",
                filterData ? filterData?.alpha_2_code : ""
            );
        }
        if (fbclid) {
            formik.setFieldValue("fbclid", fbclid);
        }
        if (campaign) {
            formik.setFieldValue("utm_source", campaign);
        }
        if (path) {
            formik.setFieldValue("utm_campaign", path);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryData?.country, countryList, fbclid, campaign, path]);

    // Reset OTP verification when phone number changes
    useEffect(() => {
        if (
            otpPhoneNumber &&
            formik.values.phone &&
            formik.values.phone !== otpPhoneNumber
        ) {
            setShowOtp(false);
            setIsOtpVerified(false);
            formik.setFieldValue("otp", "");
            setOtpPhoneNumber("");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values.phone, otpPhoneNumber]);

    const sendPhoneVerificationCode = () => {
        if (!formik.values.phone) {
            toast.error("Phone number is required");
            return;
        }
        if (!isValidPhoneNumber(formik.values.phone)) {
            toast.error("Invalid phone number");
            return;
        }
        setPhoneOtpLoading(true);
        axios
            .post(`/api/send-phone-otp`, {
                phone: formik.values.phone,
                first_name: formik.values.firstName,
                locale,
                channel: "whatsapp",
            })
            .then((res) => {
                if (res?.data?.success || res?.data?.message) {
                    setShowOtp(true);
                    formik.setFieldValue("otp", "");
                    setIsOtpVerified(false);
                    setOtpPhoneNumber(formik.values.phone);
                    toast.success("OTP sent successfully");
                } else {
                    toast.error(res?.data?.message || "Failed to send OTP");
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error(
                    error?.response?.data?.message ||
                    error?.message ||
                    "Failed to send OTP"
                );
            })
            .finally(() => setPhoneOtpLoading(false));
    };

    // Check if phone number is valid and complete
    const isPhoneValid =
        formik.values.phone && isValidPhoneNumber(formik.values.phone);

    // verify OTP server-side
    const verifyOtpCode = async (otp) => {
        if (!otp || otp.length !== 6) {
            return;
        }

        try {
            const res = await axios.post("/api/verify-otp", {
                phone: formik.values.phone,
                otp: otp,
            });

            if (res?.data?.success) {
                toast.success("OTP verified successfully");
                setShowOtp(false);
                setIsOtpVerified(true);
            } else {
                toast.error(res?.data?.message || "Invalid OTP");
                setIsOtpVerified(false);
            }
        } catch (error) {
            console.error("OTP verification error:", error);
            toast.error(
                error?.response?.data?.message ||
                error?.message ||
                "Failed to verify OTP"
            );
            setIsOtpVerified(false);
        }
    };

    // Inject PhoneInput styles
    useEffect(() => {
        const styleId = "phone-input-styles";
        if (document.getElementById(styleId)) return;

        const style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
      .phone-input-wrapper {
        background: white !important;
      }
      .phone-input-wrapper .PhoneInput {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        background: white !important;
      }
      .phone-input-wrapper .PhoneInputInput {
        border: none !important;
        outline: none !important;
        background: white !important;
        background-color: white !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        color: #000 !important;
        height: 100% !important;
        padding: 0 !important;
        flex: 1;
        margin-left: 8px;
      }
      .phone-input-wrapper .PhoneInputInput::placeholder {
        color: #9CA3AF !important;
      }
        .PhoneInputCountry{
        flex-direction: row !important;
        }
      .phone-input-wrapper .PhoneInputCountryIcon {
        width: 20px !important;
        height: 15px !important;
      }
      .phone-input-wrapper .PhoneInputCountrySelect {
        border: none !important;
        background: white !important;
        background-color: white !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        color: #000 !important;
        padding: 0 4px !important;
        height: auto !important;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }
      .phone-input-wrapper .PhoneInputCountrySelect:focus {
        background: white !important;
        background-color: white !important;
        color: #000 !important;
        outline: none !important;
      }
      .phone-input-wrapper .PhoneInputCountrySelectArrow {
        opacity: 0.7;
        color: #9CA3AF !important;
        // width: 12px;
        // height: 12px;
      }
      .phone-input-wrapper .PhoneInputCountrySelectArrow svg {
        fill: #9CA3AF !important;
        stroke: #9CA3AF !important;
      }
      .phone-input-wrapper input[type="tel"],
      .phone-input-wrapper select {
        background: white !important;
        background-color: white !important;
        color: #000 !important;
      }
      .phone-input-wrapper .PhoneInputCountryIcon img {
        width: 20px !important;
        height: 15px !important;
      }
    `;
        document.head.appendChild(style);

        return () => {
            const existingStyle = document.getElementById(styleId);
            if (existingStyle) {
                existingStyle.remove();
            }
        };
    }, []);

    return (
        <form onSubmit={formik.handleSubmit} className="relative w-full min-w-0">
            <div
                className={`relative overflow-hidden rounded-[20px] bg-white md:p-8 p-4 ${isIb ? "md:px-16 px-4 md:py-12 py-8" : ""
                    }`}
                style={{ boxShadow: isIb ? "0px 0px 10px 0px #0000001A" : "none" }}
            >
                {!isIb && (
                    <div className="md:flex hidden pointer-events-none absolute -bottom-10 right-6 h-[460px] md:w-[88%] rounded-full bg-[#E9ECF7]" />
                )}

                <div className="relative min-w-0 text-left">
                    {isIb && (
                        <div className="text-center mb-6">
                            <h2 className="text-center md:text-[25px] lg:text-[36px] text-[20px] uppercase font-extrabold text-primary">
                                Become Our <span className="text-[#B48755]">Partners</span>
                            </h2>
                            <p className="md:text-[16px] text-[14px] text-center font-normal text-primary">
                                Complete Your Registration
                            </p>
                        </div>
                    )}

                    {/* Fields row 1 */}
                    <div className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-4">
                        {/* First Name */}
                        <div className="min-w-0">
                            <div className="mb-1 text-[14px] font-normal text-[#868686]">First Name*</div>
                            <input
                                type="text"
                                {...formik.getFieldProps("firstName")}
                                className={`h-[46px] w-full min-w-0 rounded-[8px] border px-3 text-[14px] font-medium text-[#000] outline-none placeholder:text-[#9CA3AF] focus:border-[#2E59D9] ${formik.touched.firstName && formik.errors.firstName
                                    ? "border-red-500"
                                    : "border-[#E5E7EB]"
                                    }`}
                                placeholder="First Name"
                            />
                            {formik.touched.firstName && formik.errors.firstName && (
                                <p className="text-xs text-red-500 mt-1">{formik.errors.firstName}</p>
                            )}
                        </div>

                        {/* Last Name */}
                        <div className="min-w-0">
                            <div className="mb-1 text-[14px] font-normal text-[#868686]">Last Name*</div>
                            <input
                                type="text"
                                {...formik.getFieldProps("lastName")}
                                className={`h-[46px] w-full min-w-0 rounded-[8px] border px-3 text-[14px] font-medium text-[#000] outline-none placeholder:text-[#9CA3AF] focus:border-[#2E59D9] ${formik.touched.lastName && formik.errors.lastName
                                    ? "border-red-500"
                                    : "border-[#E5E7EB]"
                                    }`}
                                placeholder="Last Name"
                            />
                            {formik.touched.lastName && formik.errors.lastName && (
                                <p className="text-xs text-red-500 mt-1">{formik.errors.lastName}</p>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mt-4 min-w-0">
                        <div className="mb-1 text-[14px] font-normal text-[#868686]">Email*</div>
                        <input
                            type="email"
                            {...formik.getFieldProps("email")}
                            className={`h-[46px] w-full min-w-0 rounded-[8px] border px-3 text-[14px] font-medium text-[#000] outline-none placeholder:text-[#9CA3AF] focus:border-[#2E59D9] ${formik.touched.email && formik.errors.email
                                ? "border-red-500"
                                : "border-[#E5E7EB]"
                                }`}
                            placeholder="Email"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-xs text-red-500 mt-1">{formik.errors.email}</p>
                        )}
                    </div>

                    {/* Country */}
                    <div className="mt-4 min-w-0">
                        <div className="mb-1 text-[14px] font-normal text-[#868686]">Country Of Residence*</div>
                        <div className="min-w-0">
                            <Select
                                name="country"
                                options={options}
                                styles={selectStyles}
                                onChange={(opt) => formik.setFieldValue("country", opt?.value)}
                                onBlur={() => formik.setFieldTouched("country", true)}
                                value={options?.find((opt) => opt.value === formik.values.country)}
                                placeholder="Please select or type your country name"
                            />
                        </div>
                        {formik.touched.country && formik.errors.country && (
                            <p className="text-xs text-red-500 mt-1">{formik.errors.country}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="mt-4 min-w-0">
                        <div className="mb-1 text-[14px] font-normal text-[#868686]">Phone Number*</div>

                        <div
                            className={`phone-input-wrapper flex items-center rounded-[8px] border px-3 bg-white min-w-0 w-full ${formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-[#E5E7EB]"
                                } focus-within:border-[#2E59D9]`}
                            style={{ height: "46px" }}
                        >
                            <PhoneInput
                                international
                                defaultCountry={countryData?.country_code || countryData?.country || "AE"}
                                value={formik.values.phone}
                                onChange={(phone) => formik.setFieldValue("phone", phone)}
                                className="w-full min-w-0"
                            />
                        </div>

                        {formik.touched.phone && formik.errors.phone && (
                            <p className="text-xs text-red-500 mt-1">{formik.errors.phone}</p>
                        )}
                    </div>

                    {/* OTP */}
                    <div className="mt-4 flex flex-col md:flex-row items-stretch md:items-center gap-4 min-w-0">
                        <button
                            type="button"
                            onClick={sendPhoneVerificationCode}
                            disabled={phoneOtpLoading || !isPhoneValid}
                            className="h-[46px] w-full md:w-auto whitespace-nowrap rounded-[8px] border border-[#2E59D9] bg-white px-6 text-[14px] font-semibold text-[#293B93] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {phoneOtpLoading ? "Sending..." : "Send OTP"}
                        </button>

                        <div className="w-full min-w-0">
                            <OtpInput
                                value={formik.values.otp}
                                onChange={(otp) => {
                                    formik.setFieldValue("otp", otp);
                                    if (otp?.length === 6) verifyOtpCode(otp);
                                }}
                                numInputs={6}
                                containerStyle={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: "8px",
                                    width: "100%",
                                    maxWidth: "100%",
                                }}
                                isInputNum
                                renderInput={(props) => (
                                    <input
                                        {...props}
                                        type="tel"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                    />
                                )}
                                inputStyle={{
                                    fontSize: "16px",
                                    borderRadius: "6px",
                                    paddingBottom: "10px",
                                    paddingTop: "10px",
                                    width: "44px",
                                    maxWidth: "44px",
                                    minWidth: "44px",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    color: "#000",
                                    fontWeight: "700",
                                    outlineColor: "#2E59D9",
                                    border:
                                        formik.touched.otp && formik.errors.otp
                                            ? "1px solid red"
                                            : "1px solid #E5E7EB",
                                }}
                            />
                        </div>

                    </div>

                    {formik.touched.otp && formik.errors.otp && (
                        <p className="text-xs text-red-500 mt-1">{formik.errors.otp}</p>
                    )}

                    {/* Disclaimer */}
                    <p className="mt-6 text-[14px] font-normal leading-[1.5] text-[#7A7A7A] break-words">
                        <span className="font-medium text-[#293B93]">Disclaimer:</span> By submitting this form,
                        I acknowledge that I have read, understood, and agree to the{" "}
                        <a
                            className="text-[#293B93] underline break-words"
                            href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/Mauritius+TOB+-+Proposed+Clauses+to+add.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Client Agreement
                        </a>
                        . I give my consent for GTCFX to contact me for marketing purposes.
                    </p>

                    {/* Terms */}
                    <label className="mt-4 flex items-start gap-3 text-xs md:text-[14px] font-medium text-[#7A7A7A]">
                        <input
                            type="checkbox"
                            {...formik.getFieldProps("terms")}
                            className="mt-0.5 h-5 w-5 rounded border-[#D1D5DB]"
                        />
                        <span className="break-words">
                            By Becoming A Partner, You Agree To Our Partnership{" "}
                            <a
                                className="text-[#293B93] underline"
                                href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/TERMS+AND+CONDITIONS+-+GTC+Global+Ltd.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Terms And Conditions
                            </a>
                        </span>
                    </label>

                    {formik.touched.terms && formik.errors.terms && (
                        <p className="text-xs text-red-500 mt-1">{formik.errors.terms}</p>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading || !isOtpVerified}
                        className={`mt-8 py-4 w-full rounded-full text-[16px] font-medium ${loading || !isOtpVerified
                            ? "bg-[#DCDCDC] text-[#868686] cursor-not-allowed"
                            : "bg-gradient-to-r from-[#293B93] to-[#0D122D] text-white hover:brightness-110"
                            }`}
                    >
                        {loading ? "Submitting..." : "Become A Partner"}
                    </button>
                </div>
            </div>
        </form>

    );
}
