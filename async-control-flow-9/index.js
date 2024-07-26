const fetchDataSource1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data from source 1');
      }, 1000);
    });
  };
  
  const fetchDataSource2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data from source 2');
      }, 1500);
    });
  };
  
  const fetchDataSequentially = async () => {
    try {
      const data1 = await fetchDataSource1();
      console.log('First:', data1);
      
      const data2 = await fetchDataSource2();
      console.log('Second:', data2);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchDataSequentially();
  