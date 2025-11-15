// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';

interface TextInputProps {
  type?: string;
  name: string;
  required?: boolean;
}

export const TextInput = ({ type = 'text', name, required = false }: TextInputProps) => {
  return <input type={type} name={name} required={required} class={style.input} />;
};
