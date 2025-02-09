export const REDIRECT_ROUTES = ["/dashboard", "/landing"];

export const ALL_ROUTES = [
  // test
  "/mohammad/test",
  // Auth
  "/",
  "/landing",
  "/slide-screen",
  "/dashboard",
  
];

export const NOT_RELOAD_ROUTES = [
  ["is_login", ["/login", "/sign-up"]],
  [
    "from_location",
    ["/confirm", "/change-password", "/change-password-confirm"],
  ],
  [
    "/",
    [
      // Profile
      "/profile",
     
    ],
  ],
];
