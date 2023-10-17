import { Button, styled } from "@mui/material";

export const ButtonComponent = styled(Button)`
border-radius: 6px;
background: #9080BA;
color:#FFFF;
background-color: #9080BA;
text-transform: none;
padding: 16px 24px;
color: var(--shade-white, #FFF);
text-align: center;
font-feature-settings: 'cv04' on, 'cv03' on, 'cv01' on;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 145%;
&:hover {
  background-color: #9080BA;
}
}`;