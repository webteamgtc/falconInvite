const generateEnglishTemplate = (otp, first_name) => {
  return `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Have Time but Not Enough Income?</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">

          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:8px;padding:30px; padding-top: 20px">
      
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#253289;padding-bottom:10px;">
                Not a Shortcut. <br> Not a Get-Rich-Quick Scheme.
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                Confirm your email by entering the OTP that’s in this email.
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Dear ${first_name || "Client"},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                This is not a get-rich-quick program. It is designed for steady learning and gradual progress.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Here’s the OTP that you’ll need to enter into the form.
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#253289;padding:20px 0px;">
                ${otp}
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                If you need any help or assistance, simply reach out to our amazing Customer Care team via our whatsapp feature that’s on our website, 
                  <div className="mt-10 flex lg:justify-start justify-center">
              <a
                href="https://wa.me/18255698500" 
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  bg-[#25D366]
                  hover:bg-[#1EBE5D]
                  text-white
                  font-semibold
                  px-6 py-3
                  rounded-full
                  transition-all duration-300
                  shadow-lg
                "
              >
      
                <span className="text-sm md:text-base">
                  Chat with us on WhatsApp
                </span>
              </a>
            </div>
              </td>
            </tr>
         
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
                Have a great day,<br>Your Earn Money Team
              </td>
            </tr>
         
     
            <!-- Add Legal + Social sections here if needed -->



<tr>
  <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 10px;">
    &copy; Copyright 2026 Earn Money – All Rights Reserved
  </td>
</tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
        `;
};

const generateArabicTemplate = (otp, first_name) => {
  return ` <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Have Time but Not Enough Income?</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">

          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:8px;padding:30px; padding-top: 20px">
          
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#253289;padding-bottom:10px;">
                Not a Shortcut. <br> Not a Get-Rich-Quick Scheme.
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                Confirm your email by entering the OTP that’s in this email.
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Dear ${first_name || "Client"},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                This is not a get-rich-quick program. It is designed for steady learning and gradual progress.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Here’s the OTP that you’ll need to enter into the form.
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#253289;padding:20px 0px;">
                ${otp}
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                If you need any help or assistance, simply reach out to our amazing Customer Care team via our whatsapp feature that’s on our website, 
                  <div className="mt-10 flex lg:justify-start justify-center">
              <a
                href="https://wa.me/18255698500" 
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  bg-[#25D366]
                  hover:bg-[#1EBE5D]
                  text-white
                  font-semibold
                  px-6 py-3
                  rounded-full
                  transition-all duration-300
                  shadow-lg
                "
              >
                <span className="text-sm md:text-base">
                  Chat with us on WhatsApp
                </span>
              </a>
            </div>
              </td>
            </tr>
         
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
                Have a great day,<br>Your Earn Money Team
              </td>
            </tr>
         
     
            <!-- Add Legal + Social sections here if needed -->



<tr>
  <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 10px;">
    &copy; Copyright 2026 Earn Money – All Rights Reserved
  </td>
</tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export { generateEnglishTemplate, generateArabicTemplate };
