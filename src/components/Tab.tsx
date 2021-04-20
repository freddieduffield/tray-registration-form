import {NavLink} from "react-router-dom";
import React from "react";

export const Tab: React.FC<{name: string, path: string}> = ({name, path}) => (
    <li>
        <NavLink activeClassName="text-pink-500" to={path}>{name}</NavLink>
    </li>
)
