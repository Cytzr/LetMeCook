import Swal from 'sweetalert2';

function AuthenticationCheck(navigate) {
    const loginDataString = localStorage.getItem('login_data');
    const loginData = loginDataString ? JSON.parse(loginDataString) : null;

    if (!loginData) {
        Swal.fire({
            title: 'Warning',
            text: "Seems like you haven't logged in yet, register here",
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Login',
            cancelButtonText: 'Back',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.close();
                navigate('../login');
            } else if (result.isDismissed) {
                Swal.close();
                return false;
            }
        });
    }
}

export default AuthenticationCheck;
