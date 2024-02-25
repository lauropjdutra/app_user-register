import React from "react"

import { Button as Btn } from "./style"

const Button = ({ children, ...props }) => <Btn {...props}>{children}</Btn>

export default Button