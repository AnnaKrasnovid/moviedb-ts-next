import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import * as AllActions from '../store/actions';

export function useActions() {
    const dispatch = useDispatch()

    return bindActionCreators({...AllActions}, dispatch)
}