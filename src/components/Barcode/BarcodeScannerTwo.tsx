import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const BarcodeScannerTwo: React.FC = () => {
  const [barcode, setBarcode] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const startScan = () => {
    setBarcode(null); // Clear previous barcode
    setIsScanning(true); // Start scanning
  };

  const stopScan = () => {
    setIsScanning(false); // Stop scanning
  };

  return (
    <div>
      <h1>Barcode Scanner</h1>

      {/* Start Scan Button */}
      {!isScanning && (
        <button onClick={startScan} style={{ marginBottom: "10px" }}>
          Start Scan
        </button>
      )}

      {/* Barcode Scanner Component */}
      {isScanning && (
        <>
          <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) => {
              if (result) {
                setBarcode(result.getText());
                console.log("Barcode detected:", result.getText());
                stopScan(); // Stop scanning after detecting a barcode
              } else if (err) {
                console.error(err);
              }
            }}
          />

          {/* Stop Scan Button */}
          <button onClick={stopScan} style={{ marginTop: "10px" }}>
            Stop Scan
          </button>
        </>
      )}

      {/* Display the Detected Barcode */}
      {barcode && (
        <div>
          <h2>Detected Barcode:</h2>
          <p>{barcode}</p>
        </div>
      )}
    </div>
  );
};

export default BarcodeScannerTwo;
