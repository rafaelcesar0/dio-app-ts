import { ReactNode } from "react";

interface IFormLogin {
    children: ReactNode;
}

const FormLogin = ({ children }: IFormLogin) => {
    return (
        <form className="bg-white p-5 rounded-3xl min-w-80 mt-20 h-min">
            {children}
        </form>
    );
};

export default FormLogin;
