import React from "react";
import styled from "styled-components";
/* Components */
import { PageHero } from "../components";

function CheckoutPage() {
  return (
    <main>
      <PageHero title='Checkout' />
      CheckoutPage
      <Wrapper className='page'></Wrapper>
    </main>
  );
}

/* styles */
const Wrapper = styled.div``;
export default CheckoutPage;
