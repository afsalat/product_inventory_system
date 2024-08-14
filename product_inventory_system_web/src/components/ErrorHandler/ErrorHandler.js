import React, { useState } from 'react';

function ErrorHandling({ error }) {
    return error ? <div className="error">{error}</div> : null;
}

export default ErrorHandling;
