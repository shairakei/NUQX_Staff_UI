import React, { useState, useEffect } from 'react';

function Managequeue() {
  const [showDialog, setShowDialog] = useState(true);
  const [windowNumber, setWindowNumber] = useState('');
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setShowDialog(true); 
  }, []);

  const handleClose = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setWindowNumber(inputText);
    setShowDialog(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Window # */}
      <div style={{ 
        position: 'fixed',
        top: '140px',
        right: '50px',
        backgroundColor: '#35408E',
        padding: '8px 15px',
        color: 'white',
        fontSize: '24px',
        fontFamily: 'Clan OT, sans-serif',
        borderRadius: '4px',
        zIndex: '999',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
      }}>
        Window {windowNumber}
      </div>
      
      {showDialog && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '5px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
            width: '400px',
            fontFamily: 'Clan OT, sans-serif',
            position: 'relative',
            overflow: 'visible',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ color: '#35408E', fontSize: '40px', marginBottom: '5px' }}>Enter your</div>
            <div style={{ color: '#35408E', fontSize: '40px', marginBottom: '5px' }}>Window</div>
            <div style={{ color: '#35408E', fontSize: '40px', marginBottom: '20px' }}>Number</div>
            <input 
              type="text" 
              value={inputText} 
              onChange={(e) => setInputText(e.target.value)}
              style={{ 
                width: '80%',
                height: '40px', 
                fontSize: '20px', 
                border: '2px solid #35408E',
                marginBottom: '60px',
                padding: '5px 10px',
                boxSizing: 'border-box',
                borderRadius: '10px',
                alignSelf: 'center'
              }} 
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'flex-end',
              marginTop: '-30px'
            }}>
              <button 
                onClick={handleClose}
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#35408E', 
                  border: 'none',
                  padding: '8px 16px', 
                  fontSize: '25px',
                  fontFamily: 'Clan OT, sans-serif',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                Back
              </button>
              <button 
                onClick={handleConfirm}
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#35408E', 
                  border: 'none',
                  padding: '8px 16px',
                  fontSize: '25px',
                  fontFamily: 'Clan OT, sans-serif',
                  cursor: 'pointer'
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Empty spacer */}
      <div style={{ height: '100px' }}></div>
      
      {/* Main content */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        marginTop: '150px',
        marginLeft: '220px'
      }}>
        <div style={{
          border: '1px solid black',
          boxShadow: '2px 2px 5px black',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: 'white',
          width: '300px',
          fontFamily: 'Clan OT, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', fontFamily: 'Clan OT, sans-serif', width: '100%' }}>Now Serving</div>
          <div style={{ fontSize: '70px', color: '#35408E', fontFamily: 'Clan OT, sans-serif', marginBottom: '15px', width: '100%' }}>ENR002</div>
          <button 
            style={{
              backgroundColor: '#35408E',
              color: 'white',
              fontSize: '20px',
              border: 'none',
              borderRadius: '10px',
              padding: '10px 20px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            NEXT
          </button>
        </div>
      
        <table style={{ 
          width: '597px', 
          height: '46px', 
          borderCollapse: 'collapse', 
          marginTop: '40px', 
          textAlign: 'center',
          fontFamily: 'Clan OT, sans-serif',
          border: '1px solid #B9B9B9'
        }}>
          <thead>
            <tr>
              <th style={{ 
                backgroundColor: '#35408E', 
                color: 'white', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif',
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>Name</th>
              <th style={{ 
                backgroundColor: '#35408E', 
                color: 'white', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif',
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>Ticket Number</th>
              <th style={{ 
                backgroundColor: '#35408E', 
                color: 'white', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif',
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ 
                backgroundColor: 'white', 
                color: 'black', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif', 
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>Van</td>
              <td style={{ 
                backgroundColor: 'white', 
                color: 'black', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif', 
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>ENR002</td>
              <td style={{ 
                backgroundColor: 'white', 
                color: 'black', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif', 
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>Processing</td>
            </tr>
            <tr>
              <td style={{ 
                backgroundColor: 'white', 
                color: 'black', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif', 
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>Shai</td>
              <td style={{ 
                backgroundColor: 'white', 
                color: 'black', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif', 
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>ENR003</td>
              <td style={{ 
                backgroundColor: 'white', 
                color: 'black', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif', 
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>Waiting</td>
            </tr>
            <tr>
              <td style={{ 
                backgroundColor: 'white', 
                color: 'black', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif', 
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>Neil</td>
              <td style={{ 
                backgroundColor: 'white', 
                color: 'black', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif', 
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>ENR004</td>
              <td style={{ 
                backgroundColor: 'white', 
                color: 'black', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif', 
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>Waiting</td>
            </tr>
            <tr>
              <td style={{ 
                backgroundColor: 'white', 
                color: 'black', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif', 
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>Cyrus</td>
              <td style={{ 
                backgroundColor: 'white', 
                color: 'black', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif', 
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>ENR005</td>
              <td style={{ 
                backgroundColor: 'white', 
                color: 'black', 
                fontSize: '20px', 
                fontFamily: 'Clan OT, sans-serif', 
                textAlign: 'center',
                border: '1px solid #B9B9B9'
              }}>Waiting</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Managequeue;
