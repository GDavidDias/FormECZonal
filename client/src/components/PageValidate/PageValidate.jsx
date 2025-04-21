import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setForm } from '../../redux/configSlice';

const PageValidate = () => {
    const dispatch = useDispatch();

    const formSG = useSelector((state)=>state.config.form);

    const [error, setError] = useState('');

    const handleChangeDni = (event) =>{
        const{name, value}=event.target;
        dispatch(setForm({
            ...formSG,
            [name]:value
        }));

        const valido = /^[0-9]{7,8}$/.test(value);
        //console.log('que tiene valido: ', valido);

        if (!valido) {
        setError('Ingrese un DNI valido, entre 7 y 8 digitos');
        }else{
            setError('');
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
    };

    useEffect(()=>{
        console.log('que tiene formSG: ', formSG);
    },[formSG])

  return (
    <div className=''>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <div>
                    <label>Ingrese DNI:</label>
                    <input
                        className='border-[1px] border-gray-500 rounded-sm mx-2 px-2 focus:outline-none'
                        type='number'
                        id='dni'
                        name='dni'
                        onChange={handleChangeDni}
                    ></input>
                    {error && <p className='italic text-red-500'>{error}</p>}

                </div>
                <div>
                    <button 
                        type='submit'
                        className='w-40 h-8 bg-[#729DA6] my-2 px-2 py-1 text-base font-medium text-white hover:bg-[#6A88F7] shadow-md rounded desktop-xl:h-10 desktop-xl:text-xl'
                        disabled={error===''}
                    >Siguiente</button>   
                </div>
            </div>
        </form>
    </div>
  )
}

export default PageValidate