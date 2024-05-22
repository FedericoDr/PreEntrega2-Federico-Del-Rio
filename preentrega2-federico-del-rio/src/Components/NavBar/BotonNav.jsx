import { Link } from 'react-router-dom';
export default function ButtonComponent({ title, ruta }) {
  return (
    <>
      <button>
        <Link className="textn" to={ruta}>{title}</Link>
      </button>
    </>
  );
}
