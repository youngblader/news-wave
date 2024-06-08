import {useDispatch as useAppDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store';

export const useDispatch = () => useAppDispatch<AppDispatch>();
