import { Router } from 'express';

export function login(req, res) {
    res.json({
        "status": "success",
        "data": {
            "route":"login"
            /* Application-specific data would go here. */
        },
        "message": null /* Or optional success message */
    });
}

export function register(req, res) {
    res.json({
        "status": "success",
        "data": {
            "route":"register"
            /* Application-specific data would go here. */
        },
        "message": null /* Or optional success message */
    });
}

export function forgetPwd(req, res) {
    res.json({
        "status": "success",
        "data": {
            "route":"forgetPwd"
            /* Application-specific data would go here. */
        },
        "message": null /* Or optional success message */
    });
}

export function verifyEmail(req, res) {
    let params = req.params;
    res.json({
        "status": "success",
        "data": {
            "route":"verifyEmail"
            /* Application-specific data would go here. */
        },
        "message": null /* Or optional success message */
    });
}
