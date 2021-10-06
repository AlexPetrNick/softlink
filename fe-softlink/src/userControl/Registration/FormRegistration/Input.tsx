import React, {FC, forwardRef} from 'react'
import {TextField} from "@material-ui/core";

export const Input: any = forwardRef((props: any, ref: any): any => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            inputRef={ref}

            {...props}
        />
    )
})

