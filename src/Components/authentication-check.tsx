import Swal from 'sweetalert2';

function AuthenticationCheck(navigate, page) {
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
            showLoaderOnConfirm: false
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.close();
                const data = {
                    page
                }
                localStorage.setItem('redirect', JSON.stringify(data));
                navigate('../login');
            } else if (result.isDismissed) {
                Swal.close();
                return false;
            }
        });
        return false;
    }
    return true;

}

export default AuthenticationCheck;
