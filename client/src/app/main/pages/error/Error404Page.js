import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Error404Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center p-16">
      <div className="w-full max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
        >
          <img className="" src="assets/images/pages/404.jpg" alt="404" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          <Typography
            variant="h1"
            className="mt-48 sm:mt-96 text-4xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-none text-center"
          >
            Ooops... Error 404
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          <Typography
            variant="h5"
            color="text.secondary"
            className="mt-8 text-lg md:text-xl font-medium tracking-tight text-center"
          >
            No se pudo encontrar la página solicitada.
          </Typography>
        </motion.div>
        <Link className="block font-normal mt-48" to="/dashboards/project">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}

export default Error404Page;
