
const Footer = () => {
    return (
        <div className="bg-[#0F172A] px-[16px] md:px-[57px] lg:px-[80px] border-t-[1px] border-[#b7c3d3]">
            <div className="max-w-[1280px] mx-auto border-b-[1px] py-[32px] md:py-[35px] lg:py-[48px] border-[#b7c3d3]">
                <div className="flex flex-col md:flex-row items-start justify-evenly gap-12">
                    <div className="flex items-start justify-start">
                        <h2 className="text-[32px] text-white">DIGI<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FC] from-6.75% to-[#00FEE3] to-95.73%">SHOP</span></h2>
                    </div>
                    <div className="text-[16px] flex flex-col items-start justify-start text-[#E2E8F0] ">
                        <p className="py-[12px]">Product</p>
                        <p className="py-[12px]">Pricing</p>
                        <p className="py-[12px]">Overview</p>
                        <p className="py-[12px]">Browse</p>
                        <p className="py-[12px]">Accessibility</p>
                    </div>
                    <div className="text-[16px] flex flex-col items-start justify-start text-[#E2E8F0] ">
                        <p className="py-[12px]">Solutions</p>
                        <p className="py-[12px]">Brainstorming</p>
                        <p className="py-[12px]">Ideation</p>
                        <p className="py-[12px]">Wireframing</p>
                        <p className="py-[12px]">Research</p>
                    </div>
                    <div className="text-[16px] flex flex-col items-start justify-start text-[#E2E8F0] ">
                        <p className="py-[12px]">Resource</p>
                        <p className="py-[12px]">Help Center</p>
                        <p className="py-[12px]">Blog</p>
                        <p className="py-[12px]">Tutorial</p>
                        <p className="py-[12px]">FAQs</p>
                    </div>
                    <div className="text-[16px] flex flex-col items-start justify-start text-[#E2E8F0] ">
                        <p className="py-[12px]">Support</p>
                        <p className="py-[12px]">Contact Us</p>
                        <p className="py-[12px]">Developers</p>
                        <p className="py-[12px]">Documentation</p>
                        <p className="py-[12px]">Integrations</p>
                    </div>
                    <div className="text-[16px] flex flex-col items-start justify-start text-[#E2E8F0] ">
                        <p className="py-[12px]">Company</p>
                        <p className="py-[12px]">About</p>
                        <p className="py-[12px]">Press</p>
                        <p className="py-[12px]">Events</p>
                        <div className="flex items-center justify-center gap-1">
                            <p className="py-[12px]">Request Demo</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M16.186 10.657L12.236 6.70704C12.0538 6.51844 11.953 6.26584 11.9553 6.00364C11.9576 5.74144 12.0627 5.49063 12.2482 5.30522C12.4336 5.11981 12.6844 5.01465 12.9466 5.01237C13.2088 5.01009 13.4614 5.11088 13.65 5.29304L19.307 10.95C19.4002 11.0427 19.4741 11.1529 19.5246 11.2742C19.575 11.3955 19.601 11.5256 19.601 11.657C19.601 11.7884 19.575 11.9186 19.5246 12.0399C19.4741 12.1612 19.4002 12.2714 19.307 12.364L13.65 18.021C13.5577 18.1166 13.4474 18.1927 13.3254 18.2451C13.2034 18.2976 13.0722 18.3251 12.9394 18.3263C12.8066 18.3274 12.6749 18.3021 12.552 18.2519C12.4291 18.2016 12.3175 18.1273 12.2236 18.0334C12.1297 17.9395 12.0554 17.8279 12.0052 17.705C11.9549 17.5821 11.9296 17.4504 11.9307 17.3176C11.9319 17.1849 11.9595 17.0536 12.0119 16.9316C12.0643 16.8096 12.1405 16.6993 12.236 16.607L16.186 12.657H6.59998C6.33476 12.657 6.08041 12.5517 5.89287 12.3641C5.70533 12.1766 5.59998 11.9223 5.59998 11.657C5.59998 11.3918 5.70533 11.1375 5.89287 10.9499C6.08041 10.7624 6.33476 10.657 6.59998 10.657H16.186Z" fill="#E2E8F0" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between">
                <div className="pt-[24px]">
                    <p className="text-[#E2E8F0]">@ 2023. All rights reserved.</p>
                </div>
                <div className="text-[#E2E8F0] flex items-start md:items-center justify-end gap-3 py-[24px] lg:gap-8 ">
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Contact</p>
                    <div className="flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4.252 10C4.08416 10.6534 3.99949 11.3254 4 12C4 12.69 4.088 13.36 4.252 14H7.1C6.96518 12.6701 6.96518 11.3299 7.1 10H4.252ZM5.07 8H7.416C7.682 6.783 8.066 5.693 8.537 4.786C7.08518 5.48542 5.87722 6.60523 5.07 8ZM19.748 10H16.9C17.0348 11.3299 17.0348 12.6701 16.9 14H19.748C20.0847 12.6879 20.0847 11.3121 19.748 10ZM18.93 8C18.1228 6.60523 16.9148 5.48542 15.463 4.786C15.935 5.693 16.318 6.783 16.584 8H18.93ZM9.112 10C9.03708 10.664 8.99968 11.3318 9 12C9 12.685 9.038 13.355 9.112 14H14.888C15.0386 12.6709 15.0386 11.3291 14.888 10H9.112ZM9.47 8H14.53C14.348 7.2483 14.0855 6.51841 13.747 5.823C13.119 4.568 12.447 4 12 4C11.552 4 10.881 4.568 10.253 5.823C9.938 6.455 9.673 7.19 9.47 8ZM5.07 16C5.87722 17.3948 7.08518 18.5146 8.537 19.214C8.065 18.307 7.682 17.217 7.416 16H5.07ZM18.93 16H16.584C16.318 17.217 15.934 18.307 15.463 19.214C16.9148 18.5146 18.1228 17.3948 18.93 16ZM9.47 16C9.673 16.81 9.938 17.545 10.253 18.177C10.881 19.432 11.553 20 12 20C12.448 20 13.119 19.432 13.747 18.177C14.062 17.545 14.327 16.81 14.53 16H9.47ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z" fill="#E2E8F0" />
                        </svg>
                        <p>EN</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18.5 4.80423C17.4428 4.28906 16.2552 4 15 4C10.5817 4 7 7.58172 7 12C7 16.4183 10.5817 20 15 20C16.2552 20 17.4428 19.7109 18.5 19.1958" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 10H16" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 14H16" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>EUR</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="1" y="1" width="22" height="22" rx="11" stroke="#E2E8F0" strokeWidth="2" />
                        <path d="M11.9098 15.016L11.5858 18.103C11.572 18.2336 11.5326 18.3602 11.4699 18.4756C11.4072 18.591 11.3223 18.6929 11.2202 18.7755C11.1181 18.8581 11.0008 18.9197 10.8748 18.957C10.7489 18.9942 10.6169 19.0063 10.4863 18.9925C10.3557 18.9787 10.2291 18.9393 10.1137 18.8766C9.9983 18.8139 9.8964 18.7291 9.81381 18.627C9.73121 18.5249 9.66953 18.4075 9.63229 18.2816C9.59505 18.1556 9.58298 18.0236 9.59677 17.893L10.3198 11.01H7.00977C6.74416 11.01 6.48942 10.9045 6.3016 10.7167C6.11379 10.5289 6.00827 10.2741 6.00827 10.0085C6.00827 9.74289 6.11379 9.48815 6.3016 9.30033C6.48942 9.11251 6.74416 9.007 7.00977 9.007H17.0098C17.2754 9.007 17.5301 9.11251 17.7179 9.30033C17.9058 9.48815 18.0113 9.74289 18.0113 10.0085C18.0113 10.2741 17.9058 10.5289 17.7179 10.7167C17.5301 10.9045 17.2754 11.01 17.0098 11.01H13.6998L14.4228 17.895C14.4411 18.0279 14.4325 18.1632 14.3976 18.2927C14.3626 18.4223 14.3019 18.5435 14.2192 18.6491C14.1364 18.7548 14.0333 18.8427 13.9159 18.9076C13.7984 18.9726 13.6692 19.0133 13.5357 19.0273C13.4023 19.0414 13.2674 19.0284 13.139 18.9892C13.0107 18.9501 12.8915 18.8855 12.7886 18.7994C12.6857 18.7132 12.6012 18.6073 12.5401 18.4878C12.4789 18.3684 12.4424 18.2378 12.4328 18.104L12.1098 15.016H11.9098ZM12.0098 9.006C10.9048 9.006 10.0098 8.109 10.0098 7.003C10.0098 5.897 10.9048 5 12.0098 5C13.1148 5 14.0098 5.897 14.0098 7.003C14.01 7.53379 13.7995 8.04296 13.4245 8.41857C13.0494 8.79417 12.5406 9.00547 12.0098 9.006Z" fill="#E2E8F0" />
                    </svg>

                </div>
            </div>
        </div>
    );
};

export default Footer;