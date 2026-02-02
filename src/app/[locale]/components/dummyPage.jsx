// 'use client'; // Required for Next.js App Router
// import React, { forwardRef, useState, useEffect } from 'react';
// import HTMLFlipBook from 'react-pageflip';
// import GoldenFalconHeroMobile from './HeroSlider';
// import DistinguishedGuestsGrid from './GuestCard';
// import EventAgendaSection from './EventCard';
// import PartnerOrganizationsSection from './PartnerOrg';
// import PartnerMediaSection from './PartnerMedia';
// import GtcFooterStrip from './FooterCard';



// const Page = forwardRef((props, ref) => {
//     return (
//         <div
//             className="h-full w-full outline-none"
//             ref={ref}
//             style={{
//                 backgroundColor: 'transparent',
//             }}
//         >
//             {/* We use a wrapper to handle internal scrolling 
//          without interfering with the flip physics 
//       */}
//             <div className="h-full w-full overflow-y-auto custom-scrollbar">
//                 {props.children}
//             </div>
//         </div>
//     );
// });

// Page.displayName = 'Page';

// export default function FlipBook({ bookRef, onPageChange, activeTab }) {
//     // Responsive dimensions - smaller on mobile, larger on desktop
//     const getFlipbookDimensions = () => {
//         if (typeof window === 'undefined') {
//             return { width: 1600, height: 1000, size: 'fixed' };
//         }
//         const isMobile = window.innerWidth < 768;
//         if (isMobile) {
//             const width = Math.max(300, window.innerWidth - 32);
//             const height = Math.max(400, window.innerHeight * 0.7);
//             return { width, height, size: 'stretch' };
//         }
//         return { width: 1600, height: 1000, size: 'fixed' };
//     };

//     const [dimensions, setDimensions] = useState(() => {
//         if (typeof window !== 'undefined') {
//             return getFlipbookDimensions();
//         }
//         return { width: 1600, height: 1000, size: 'fixed' };
//     });

//     useEffect(() => {
//         // Set initial dimensions on mount
//         setDimensions(getFlipbookDimensions());
        
//         const handleResize = () => {
//             setDimensions(getFlipbookDimensions());
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <div className="flex flex-col justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-4">
//             <div className="relative transition-all duration-500 ease-in-out z-20 w-full max-w-full">
//                 <HTMLFlipBook
//                     width={dimensions.width}
//                     height={dimensions.height}
//                     size={dimensions.size}  // Stretch for mobile, fixed for desktop
//                     minWidth={300}         // Smaller min width for mobile
//                     maxWidth={1800}
//                     minHeight={400}        // Smaller min height for mobile
//                     maxHeight={1600}

//                     // --- Critical Portrait Settings ---
//                     mode="portrait"       // Explicitly force single page
//                     displayMode="single"  // Ensure only one page renders at a time

//                     // --- Animation Physics ---
//                     flippingTime={1200}    // Longer duration for more noticeable flip animation
//                     usePortrait={true}    // Double-check portrait mode
//                     startZIndex={40}
//                     autoSize={true}

//                     // --- Interaction ---
//                     clickEventForward={true}
//                     useMouseEvents={false}
//                     swipeDistance={30}    // Sensitivity of the swipe
//                     showPageCorners={false} // Visual hint like Turn.js
//                     disableFlipByClick={false}

//                     ref={bookRef}
//                     onFlip={onPageChange}
//                     onPageFlip={onPageChange}
//                 >
//                     {/* Your actual components */}
//                     <Page>
//                         <div className="  text-white min-h-full">
//                             <GoldenFalconHeroMobile activeTab={activeTab} />
//                         </div>
//                     </Page>
//                     <Page>
//                         <div className="  text-white min-h-full">
//                             <DistinguishedGuestsGrid />
//                         </div>
//                     </Page>
//                     <Page>
//                         <div className="  text-white min-h-full">
//                             <EventAgendaSection />
//                         </div>
//                     </Page>
//                     <Page>
//                         <div className="  text-white min-h-full">
//                             <PartnerOrganizationsSection />
//                         </div>
//                     </Page>
//                     <Page>
//                         <div className="  text-white min-h-full">
//                             <PartnerMediaSection />
//                         </div>
//                     </Page>
//                     <Page>
//                         <div className="  text-white min-h-full">
//                             <GtcFooterStrip />
//                         </div>
//                     </Page>

//                 </HTMLFlipBook>
//             </div>

//             <style jsx global>{`
//         .book-shadow {
//           box-shadow: 0 0 50px rgba(0,0,0,0.8);
//         }
//         /* Custom scrollbar to keep it clean */
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #333;
//           border-radius: 10px;
//         }
//       `}</style>
//         </div>
//     );
// }

'use client'; // Required for Next.js App Router
import React, { forwardRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import GoldenFalconHeroMobile from './HeroSlider';
import DistinguishedGuestsGrid from './GuestCard';
import EventAgendaSection from './EventCard';
import PartnerOrganizationsSection from './PartnerOrg';
import PartnerMediaSection from './PartnerMedia';
import GtcFooterStrip from './FooterCard';



const Page = forwardRef((props, ref) => {
    return (
        <div
            className="h-full w-full outline-none"
            ref={ref}
            style={{
                backgroundColor: 'transparent',
            }}
        >
            <div className="h-full w-full overflow-y-auto custom-scrollbar">
                {props.children}
            </div>
        </div>
    );
});

Page.displayName = 'Page';

export default function FlipBook({ bookRef, onPageChange, activeTab }) {
    // Simple responsive dimensions - one page on all devices
    const getFlipbookDimensions = () => {
        if (typeof window === 'undefined') {
            return { width: 600, height: 800 };
        }
        
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Calculate available space with padding
        const paddingX = viewportWidth < 768 ? 32 : 64;
        const paddingY = 120;
        
        const availableWidth = viewportWidth - paddingX;
        const availableHeight = viewportHeight - paddingY;
        
        // Target aspect ratio 3:4 (portrait)
        const aspectRatio = 3 / 4;
        
        // Calculate from width first
        let width = availableWidth;
        let height = width / aspectRatio;
        
        // If height is too tall, recalculate from height
        if (height > availableHeight) {
            height = availableHeight;
            width = height * aspectRatio;
        }
        
        // Apply constraints based on screen size
        if (viewportWidth < 768) {
            // Mobile: 300-450px width
            width = Math.max(300, Math.min(width, 450));
            height = width / aspectRatio;
        } else if (viewportWidth < 1440) {
            // Tablet/Small Desktop: 450-700px width
            width = Math.max(450, Math.min(width, 700));
            height = width / aspectRatio;
        } else {
            // Large Desktop: 600-900px width
            width = Math.max(600, Math.min(width, 900));
            height = width / aspectRatio;
        }
        
        return { width: Math.floor(width), height: Math.floor(height) };
    };

    const [dimensions, setDimensions] = useState(() => {
        if (typeof window !== 'undefined') {
            return getFlipbookDimensions();
        }
        return { width: 600, height: 800 };
    });

    useEffect(() => {
        // Set initial dimensions on mount
        setDimensions(getFlipbookDimensions());
        
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                setDimensions(getFlipbookDimensions());
            }, 100);
        };
        
        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);
        
        return () => {
            clearTimeout(resizeTimeout);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen py-8 px-4">
            <div className="flipbook-container relative">
                <HTMLFlipBook
                    width={dimensions.width}
                    height={dimensions.height}
                    size="stretch"
                    minWidth={300}
                    maxWidth={900}
                    minHeight={400}
                    maxHeight={1200}

                    // Single page portrait mode
                    drawShadow={true}
                    flippingTime={800}
                    usePortrait={true}
                    startPage={0}
                    startZIndex={0}
                    autoSize={false}
                    maxShadowOpacity={0.5}
                    showCover={false}
                    mobileScrollSupport={true}

                    // Interaction
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={50}
                    showPageCorners={true}
                    disableFlipByClick={false}

                    ref={bookRef}
                    onFlip={onPageChange}
                >
                    <Page>
                        <div className="text-white h-full w-full">
                            <GoldenFalconHeroMobile activeTab={activeTab} />
                        </div>
                    </Page>
                    <Page>
                        <div className="text-white h-full w-full">
                            <DistinguishedGuestsGrid />
                        </div>
                    </Page>
                    <Page>
                        <div className="text-white h-full w-full">
                            <EventAgendaSection />
                        </div>
                    </Page>
                    <Page>
                        <div className="text-white h-full w-full">
                            <PartnerOrganizationsSection />
                        </div>
                    </Page>
                    <Page>
                        <div className="text-white h-full w-full">
                            <PartnerMediaSection />
                        </div>
                    </Page>
                    <Page>
                        <div className="text-white h-full w-full">
                            <GtcFooterStrip />
                        </div>
                    </Page>
                </HTMLFlipBook>
            </div>

            <style jsx global>{`
        .flipbook-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Custom scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        
        /* Ensure proper scaling on all devices */
        .stf__wrapper {
          margin: 0 auto !important;
        }
      `}</style>
        </div>
    );
}

// 'use client'; // Required for Next.js App Router
// import React, { forwardRef, useState, useEffect } from 'react';
// import HTMLFlipBook from 'react-pageflip';
// import GoldenFalconHeroMobile from './HeroSlider';
// import DistinguishedGuestsGrid from './GuestCard';
// import EventAgendaSection from './EventCard';
// import PartnerOrganizationsSection from './PartnerOrg';
// import PartnerMediaSection from './PartnerMedia';
// import GtcFooterStrip from './FooterCard';



// const Page = forwardRef((props, ref) => {
//     return (
//         <div
//             className="h-full w-full outline-none"
//             ref={ref}
//             style={{
//                 backgroundColor: 'transparent',
//             }}
//         >
//             {/* We use a wrapper to handle internal scrolling 
//          without interfering with the flip physics 
//       */}
//             <div className="h-full w-full overflow-y-auto custom-scrollbar">
//                 {props.children}
//             </div>
//         </div>
//     );
// });

// Page.displayName = 'Page';

// export default function FlipBook({ bookRef, onPageChange, activeTab }) {
//     // Responsive dimensions - smaller on mobile, larger on desktop
//     const getFlipbookDimensions = () => {
//         if (typeof window === 'undefined') {
//             return { width: 1600, height: 1000, size: 'fixed' };
//         }
//         const isMobile = window.innerWidth < 768;
//         if (isMobile) {
//             const width = Math.max(300, window.innerWidth - 32);
//             const height = Math.max(400, window.innerHeight * 0.85);
//             return { width, height, size: 'stretch' };
//         }
//         return { width: 1600, height: 1000, size: 'fixed' };
//     };

//     const [dimensions, setDimensions] = useState(() => {
//         if (typeof window !== 'undefined') {
//             return getFlipbookDimensions();
//         }
//         return { width: 1600, height: 1000, size: 'fixed' };
//     });

//     useEffect(() => {
//         // Set initial dimensions on mount
//         setDimensions(getFlipbookDimensions());
        
//         const handleResize = () => {
//             setDimensions(getFlipbookDimensions());
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-4">
//             <div className="flipbook-container relative transition-all duration-500 ease-in-out z-20 w-full max-w-full">
//                 <HTMLFlipBook
//                     width={dimensions.width}
//                     height={dimensions.height}
//                     size={dimensions.size}  // Stretch for mobile, fixed for desktop
//                     minWidth={300}         // Smaller min width for mobile
//                     maxWidth={1800}
//                     minHeight={400}        // Smaller min height for mobile
//                     maxHeight={1600}

//                     // --- Critical Portrait Settings ---
//                     mode="portrait"       // Explicitly force single page
//                     displayMode="single"  // Ensure only one page renders at a time

//                     // --- Animation Physics ---
//                     flippingTime={1200}    // Longer duration for more noticeable flip animation
//                     usePortrait={true}    // Double-check portrait mode
//                     startZIndex={40}
//                     autoSize={true}

//                     // --- Interaction ---
//                     clickEventForward={true}
//                     useMouseEvents={false}
//                     swipeDistance={30}    // Sensitivity of the swipe
//                     showPageCorners={false} // Visual hint like Turn.js
//                     disableFlipByClick={false}

//                     ref={bookRef}
//                     onFlip={onPageChange}
//                     onPageFlip={onPageChange}
//                 >
//                     {/* Your actual components */}
//                     <Page>
//                         <div className="  text-white min-h-full">
//                             <GoldenFalconHeroMobile activeTab={activeTab} />
//                         </div>
//                     </Page>
//                     <Page>
//                         <div className="  text-white min-h-full">
//                             <DistinguishedGuestsGrid />
//                         </div>
//                     </Page>
//                     <Page>
//                         <div className="  text-white min-h-full">
//                             <EventAgendaSection />
//                         </div>
//                     </Page>
//                     <Page>
//                         <div className="  text-white min-h-full">
//                             <PartnerOrganizationsSection />
//                         </div>
//                     </Page>
//                     <Page>
//                         <div className="  text-white min-h-full">
//                             <PartnerMediaSection />
//                         </div>
//                     </Page>
//                     <Page>
//                         <div className="  text-white min-h-full">
//                             <GtcFooterStrip />
//                         </div>
//                     </Page>

//                 </HTMLFlipBook>
//             </div>

//             <style jsx global>{`
//         /* Remove library's default margin/padding only on desktop (md and up) */
//         @media (min-width: 768px) {
//           .flipbook-container {
//             margin: 0 !important;
//             padding: 0 !important;
//           }
//           .flipbook-container > div {
//             margin: 0 !important;
//             padding: 0 !important;
//           }
//           .stf__wrapper {
//             margin: 0 !important;
//             padding: 0 !important;
//           }
//           .stf__parent {
//             margin: 0 !important;
//             padding: 0 !important;
//           }
//           .stf__block {
//             margin: 0 !important;
//             padding: 0 !important;
//           }
//         }
//         .book-shadow {
//           box-shadow: 0 0 50px rgba(0,0,0,0.8);
//         }
//         /* Custom scrollbar to keep it clean */
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #333;
//           border-radius: 10px;
//         }
//       `}</style>
//         </div>
//     );
// }

// two page code at a time


// 'use client';
// import React, { forwardRef, useState, useEffect } from 'react';
// import HTMLFlipBook from 'react-pageflip';
// import GoldenFalconHeroMobile from './HeroSlider';
// import DistinguishedGuestsGrid from './GuestCard';
// import EventAgendaSection from './EventCard';
// import PartnerOrganizationsSection from './PartnerOrg';
// import PartnerMediaSection from './PartnerMedia';
// import GtcFooterStrip from './FooterCard';

// const Page = forwardRef((props, ref) => {
//     return (
//         <div
//             className="h-full w-full outline-none bg-transparent"
//             ref={ref}
//             data-density="soft"
//         >
//             <div className="h-full w-full overflow-y-auto custom-scrollbar">
//                 {props.children}
//             </div>
//         </div>
//     );
// });

// Page.displayName = 'Page';

// export default function FlipBook({ bookRef, onPageChange, activeTab }) {
//     const [dimensions, setDimensions] = useState({ width: 500, height: 800 });

//     useEffect(() => {
//         const updateDimensions = () => {
//             const vh = window.innerHeight;
//             const vw = window.innerWidth;
            
//             if (vw < 768) {
//                 // Mobile configuration
//                 setDimensions({
//                     width: vw,
//                     height: vh * 0.85
//                 });
//             } else {
//                 // Desktop Single-Page configuration
//                 // We calculate height first, then width based on aspect ratio
//                 const calcHeight = Math.min(800, vh - 120); 
//                 const calcWidth = calcHeight * 0.75; // Forces a vertical "Portrait" rectangle
//                 setDimensions({ width: calcWidth, height: calcHeight });
//             }
//         };

//         updateDimensions();
//         window.addEventListener('resize', updateDimensions);
//         return () => window.removeEventListener('resize', updateDimensions);
//     }, []);

//     return (
//         <div className="flex flex-col justify-start items-center w-full min-h-[90vh] p-0 m-0 overflow-hidden">
            
//             <div className="relative flex justify-center items-start w-full" style={{ marginTop: '-20px' }}>
//                 <HTMLFlipBook
//                     width={dimensions.width}
//                     height={dimensions.height}
//                     size="stretch"
//                     minWidth={300}
//                     maxWidth={800} // Keep this low to prevent 2-page spread
//                     minHeight={400}
//                     maxHeight={1200}

//                     // --- FORCE SINGLE PAGE ---
//                     mode="portrait"
//                     displayMode="single"
//                     usePortrait={true}
//                     showCover={false}
                    
//                     // --- Animation ---
//                     flippingTime={1000}
//                     startZIndex={40}
//                     shadowOpacity={0.4}

//                     // --- Interaction ---
//                     clickEventForward={true}
//                     useMouseEvents={true} 
//                     swipeDistance={15}
//                     showPageCorners={false}

//                     ref={bookRef}
//                     onFlip={(e) => onPageChange(e.data)}
//                     className="flipbook-canvas"
//                 >
//                     <Page><GoldenFalconHeroMobile activeTab={activeTab} /></Page>
//                     <Page><DistinguishedGuestsGrid /></Page>
//                     <Page><EventAgendaSection /></Page>
//                     <Page><PartnerOrganizationsSection /></Page>
//                     <Page><PartnerMediaSection /></Page>
//                     <Page><GtcFooterStrip /></Page>
//                 </HTMLFlipBook>
//             </div>

//             <style jsx global>{`
//                 .flipbook-canvas {
//                     box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
//                     margin-top: 0 !important;
//                 }
                
//                 /* This helps remove the gap inside the library container */
//                 .stf__parent {
//                     background: transparent !important;
//                 }

//                 .custom-scrollbar::-webkit-scrollbar {
//                     width: 4px;
//                 }
//                 .custom-scrollbar::-webkit-scrollbar-thumb {
//                     background: #c5a059;
//                     border-radius: 10px;
//                 }
//             `}</style>
//         </div>
//     );
// }



// 'use client';
// import React, { forwardRef } from 'react';
// import HTMLFlipBook from 'react-pageflip';
// // ... your imports

// const Page = forwardRef((props, ref) => {
//   return (
//     /* Important: use 'data-density="hard"' on cover pages if you want them stiff */
//     <div 
//       className="h-full w-full overflow-hidden" 
//       ref={ref}
//       style={{
//         backgroundColor: '#000000',
//         background: 'linear-gradient(180deg, #000000 0%, #0A0C14 50%, #0B1022 100%)',
//         cursor: 'grab'
//       }}
//     >
//       <div className="h-full w-full overflow-y-auto overflow-x-hidden">
//         {props.children}
//       </div>
//     </div>
//   );
// });

// Page.displayName = 'Page';

// export default function FlipBook() {
//   return (
//     <div className="flex justify-center items-center w-full min-h-screen bg-black py-10">
//       <HTMLFlipBook 
//         width={500}           // Width of a single page
//         height={750}          // Height of the page
//         size="fixed"          // Changed to fixed for more stable animations
//         minWidth={300}
//         maxWidth={1000}
//         minHeight={400}
//         maxHeight={1533}
        
//         // --- Animation Settings ---
//         flippingTime={1000}   // Speed of the flip (ms). Increase for "slower" feel
//         usePortrait={true}    // Forces single-page view
//         startZIndex={0}
//         autoSize={true}
//         showCover={false}
//         mobileScrollSupport={true}
//         clickEventForward={true} // Allows clicking buttons inside components
        
//         className="shadow-2xl"
//       >
//         {/* Your Pages */}
//         <Page><GoldenFalconHeroMobile /></Page>
//         <Page><DistinguishedGuestsGrid /></Page>
//         <Page><EventAgendaSection /></Page>
//         <Page><PartnerOrganizationsSection /></Page>
//         <Page><EventAgendaSection /></Page>
//         <Page><PartnerMediaSection /></Page>
//         <Page><GtcFooterStrip /></Page>
//       </HTMLFlipBook>
//     </div>
//   );
// }