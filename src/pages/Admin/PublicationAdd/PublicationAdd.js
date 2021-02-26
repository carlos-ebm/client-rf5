import React, { useState } from "react";
import { Helmet } from "react-helmet";

import PublicationForm from "./../../../components/Admin/Publications/PublicationForm";

export default function PublicationAdd() {
    return(
        <>
        <Helmet><title>Radio F5 | Agregar Publicación</title></Helmet>
            <PublicationForm/>
        </>
    )
}