import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
margin: 50px 0;
width: 100%;
max-width: 500px;



&.row{
  flex-direction: row;
  gap: 10px;
}
`;

export const FormItem = styled.div`
width: 100%;
max-width: 400px;
height: 60px;
position: relative;
display: flex;
align-items: center;
gap: 5px;

input, textarea {
  background-color: var(--black);
  border: none;
  height: 100%;
  width: 100%;
  color: var(--white);
  font-size: 1.2rem;
  padding-top: 30px;
  padding-left: 10px;
  padding-bottom: 10px;
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--primary);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px var(--black) inset !important;
    box-shadow: 0 0 0 1000px var(--black) inset !important;
    -webkit-text-fill-color: var(--white) !important;
    caret-color: var(--white) !important;
  }
}

textarea {
  min-width: 100%;
  padding-bottom: 10px;
  padding-top: 40px;
}

img {
  height: 20px;
  position: absolute;
  right: 20px;
}

label {
  position: absolute;
  left: 10px;
  top: 10px;
  color: var(--rose);
  font-size: 0.7rem;
  z-index: 1;

  &.error {
    color: var(--error);
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
    border: solid var(--rose) 2px;
    cursor: pointer;

    &:checked {
      background: var(--rose);
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
padding: 0 10px;


input{
  background-color: var(--secondary);
  border: none;
  height: 100%;
  width: 100%;
  color: var(--white);
  font-size: 1.2rem;

  &:focus{
    outline: none;
  } 

  &::placeholder{
    color: var(--wildYonder);
    font-size: 1rem;
  }
}
`;


export const TotalPrice = styled.div`
display: flex;
justify-content: space-between;
margin: 40px 0;
border-top: 2px solid var(--rose);
border-bottom: 2px solid var(--rose);
padding: 20px 0;
align-items: center;
flex-wrap: wrap;
gap: 10px;

h3{
  margin: 0;
}
`;

export const FormImageContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;

div{
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;

  button{
    position: absolute;
    top: 0;
    right: 0;

    img{
      height: 20px;
      width: 20px;
    }
  }
}

img{
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 10px;
}

div{
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;

}
`;

export const FormImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  `;

export const ErrorMessage = styled.p`
  color: var(--error);
  font-size: 1rem;
  margin: 5px 0;
`;

export const EditForm = styled.form`
flex-direction: column;
gap: 20px;
display: none;

&.show {
  display: flex;
}
`;

export const EditFormItem = styled.div`
position: relative;

label{
  color: var(--rose);
  font-size: 0.7rem;
  margin-bottom: 5px;
  position: absolute;
  top: 5px;
  left: 10px;

}

input, textarea {
  background-color: var(--black);
  border: none;
  width: 100%;
  color: var(--white);
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--primary);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px var(--black) inset !important;
    box-shadow: 0 0 0 1000px var(--black) inset !important;
    -webkit-text-fill-color: var(--white) !important;
    caret-color: var(--white) !important;
  }
}

textarea {
  max-width: 200px;
  min-width: 100%;
}
`;

