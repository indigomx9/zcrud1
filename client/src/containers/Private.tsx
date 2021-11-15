import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../global/RootReducer";
import { saveUser } from "../global/AuthSlice";
import { AuthAPI } from "../global/AuthAPI";

export const Private = (): JSX.Element => {
    const [privat, { data }] = AuthAPI.usePrivateMutation();
    const dispatch = useDispatch<AppDispatch>();

    React.useEffect(() => {
        if (!localStorage.getItem("token")) return
        privat(localStorage.getItem("token"));
    }, [privat]);

    React.useEffect(() => {
        if (!data) return;
        dispatch(saveUser(data));
    }, [data, dispatch]);

    return (
        <React.Fragment>
            {/* A link to the Header Component. */}
            <h1>Private</h1>
        </React.Fragment>
    );
};



