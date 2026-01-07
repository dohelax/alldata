/*! 

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import AuthNavbar from "components/Navbars/AuthNavbar";
import Footer from "components/Footer/Footer";
import Landing from "views/Pages/Landing";
import theme from "theme/themeAuth";

export default function LandingLayout() {
  return (
    <ChakraProvider theme={theme} resetCss={false} w='100%'>
      <Box w='100%'>
        <AuthNavbar logoText='ALLDATA' />
        <Landing />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
