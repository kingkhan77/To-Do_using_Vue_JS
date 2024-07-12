import swal from "sweetalert";

export function useFlash() {
    function flash(msg) {
        return swal('Hurray!', msg, 'success')
    }

    return {flash};
}