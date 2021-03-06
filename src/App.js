import Form from './components/Form';
import TableMatrix from './components/TableMatrix';

import {connect} from 'react-redux';
import './App.css';
import {useState, useEffect} from 'react';

const App = ({settings}) => {
  const [matrix, setMatrix] = useState(false);

  useEffect(() => {
    setMatrix(true);
  }, [settings]);

  return (
    <>
      <section className="section-form">
        <Form />
      </section>
      <section className="section-table">{matrix && <TableMatrix />}</section>
    </>
  );
};

const mapStateToProps = (state) => ({
  settings: state.matrix.settings,
});

export default connect(mapStateToProps)(App);
