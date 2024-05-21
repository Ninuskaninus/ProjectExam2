import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
margin: 50px 0;
width: 100%;
max-width: 500px;
`;

export const FormItem = styled.div`
width: 100%;
max-width: 400px;
height: 60px;
position: relative;
display: flex;
align-items: center;
gap: 10px;

input{
  background-color: var(--secondary);
  border: none;
  height: 100%;
  width: 100%;
  color: var(--white);
  font-size: 1.2rem;
  padding-top: 30px;
  padding-left: 10px;
  padding-bottom: 10px;
  border-radius: 10px;

  &:focus{
    outline: none;
  }

  &::placeholder{
    color: var(--tertiary);
  }
}

img{
  height: 20px;
  position: absolute;
  right: 20px;
}

label{
  position: absolute;
  left: 10px;
  top: 10px;
  color: var(--detail);
  font-size: 0.7rem;

  &.error{
    color: var(--error);
  
  }
}
`;

export const FormBtnContainer = styled.div`
margin: 20px 0;
`;

export const FormItemCheckbox = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    --webkit-appearance: none;
    --moz-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: solid var(--detail) 2px;
    cursor: pointer;

    &:checked {
      background: var(--detail);
    }
  }

  label {
    color: var(--white);
    font-size: 1rem;
    margin-left: 10px;
  }
`;

export const FormSearch = styled.form`
width: 100%;
height: 60px;
position: relative;
display: flex;
align-items: center;
gap: 10px;


input{
  background-color: var(--primary);
  border: none;
  height: 100%;
  width: 100%;
  color: var(--white);
  font-size: 1.2rem;

  &:focus{
    outline: none;
  } 

  &::placeholder{
    color: var(--tertiary);
  }
}
`;

export const FormFilter = styled.form`
display: flex;
gap: 10px;

@media (max-width: 910px){
  display:none;
}
`;

export const FormFilterItem = styled.div`
position: relative;
display: flex;
align-items: center;
gap: 10px;

input{
border-radius: 30px;
background-color: var(--primary);
padding-left: 50px;
padding-right: 10px;
color: var(--white);
border: none;
width: 180px;
height: 60px;
font-size: 1rem;
font-family: var(--mainFont);

&::placeholder{
  color: var(--white);
}

&:focus{
  outline: none;
}

  &[type="date"] {
      &::-webkit-calendar-picker-indicator {
        background: transparent;
        bottom: 0;
        color: transparent;
        cursor: pointer;
        height: auto;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
        z-index: 1
      }
    }
}

img{
  height: 20px;
  position: absolute;
  left: 20px;
}
`;

export const FormBooking = styled.form`
display: flex;
gap: 10px;
flex-wrap: wrap;

input{
  background-color: var(--secondary);
  border: none;
  height: 60px;
  width: 180px;
  color: var(--white);
  font-size: 1.2rem;
  border-radius: 30px;
  padding: 0 50px;


  &:focus{
    outline: none;
  } 

  &::placeholder{
    color: var(--tertiary);
  }

  &[type="date"] {
    &::-webkit-calendar-picker-indicator {
      background: transparent;
      bottom: 0;
      color: transparent;
      cursor: pointer;
      height: auto;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: auto;
      z-index: 1
    }
  }
}
`;
export const FormBookingItem = styled.div`
position: relative;

img{
  height: 20px;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  
}
`;


export const TotalPrice = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0;
border-top: 2px solid var(--detail);
border-bottom: 2px solid var(--detail);
padding: 10px 0;
align-items: center;
flex-wrap: wrap;
gap: 10px;

h3{
  margin: 0;
}
`;

export const FormImageContainer = styled.div`
img{
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-left: 10px;
  background-color: var(--detail);
}
`;

export const ErrorMessage = styled.p`
  color: var(--error);
  font-size: 1rem;
  margin: 10px 0;
`;

