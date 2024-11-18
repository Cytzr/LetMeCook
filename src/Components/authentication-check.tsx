import Swal from 'sweetalert2';

function AuthenticationCheck(navigate, page, checkPremium = false) {
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
    if (checkPremium && loginData && loginData.is_premium === 0) {
        Swal.fire({
            title: 'Warning',
            text: "Subscribe to premium first to access this feature",
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Subscribe',
            cancelButtonText: 'Back',
            showLoaderOnConfirm: false
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.close();
                navigate('../premium');
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
