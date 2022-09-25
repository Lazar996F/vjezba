import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    <div className='row'>
      <div className='header'>
        <div className='box-title'>
          Header
        </div>
      </div>
    </div>
    <div className='row second-row'>
      <div className='col-2 p-0'>
        <div className='nav'>
          <div className='box-title'>
            Nav
          </div>
        </div>
      </div>
      <div className='col-10 p-0 contetWithFooter'>
        <div className='content'>
          <div className='box-title'>
            Content
          </div>
        </div>
        <div className='footer'>
            <div className='box-title'>
              Footer
            </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
