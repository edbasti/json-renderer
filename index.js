const data = {
  "data": [
    {
      "id": 1,
      "country": "Australia",
      "category": "men",
      "count": "12.84"
    },
    {
      "id": 1,
      "country": "Ghana",
      "category": "men",
      "count": "16.46"
    },
    {
      "id": 1,
      "country": "Indonesia",
      "category": "men",
      "count": "139.13"
    },
    {
      "id": 1,
      "country": "Kenya",
      "category": "men",
      "count": "27.32"
    },
    {
      "id": 1,
      "country": "Australia",
      "category": "women",
      "count": "12.94"
    },
    {
      "id": 1,
      "country": "Ghana",
      "category": "women",
      "count": "16.38"
    },
    {
      "id": 1,
      "country": "Indonesia",
      "category": "women",
      "count": "137.23"
    },
    {
      "id": 1,
      "country": "Kenya",
      "category": "women",
      "count": "27.66"
    },
    {
      "id": 1,
      "country": "Australia",
      "category": "youth",
      "count": "5.71"
    },
    {
      "id": 1,
      "country": "Ghana",
      "category": "youth",
      "count": "14.62"
    },
    {
      "id": 1,
      "country": "Indonesia",
      "category": "youth",
      "count": "82.96"
    },
    {
      "id": 1,
      "country": "Kenya",
      "category": "youth",
      "count": "24.42"
    }
  ]
}

const dataMen = data.data.filter(item => item.category === 'men');
const dataWomen = data.data.filter(item => item.category === 'women');
const dataYouth = data.data.filter(item => item.category === 'youth');

const totalMen = dataMen.reduce(function(_this, val) {
  return _this + parseInt(val.count)
}, 0);
const totalWomen = dataWomen.reduce(function(_this, val) {
  return _this + parseInt(val.count)
}, 0);
const totalYouth = dataYouth.reduce(function(_this, val) {
  return _this + parseInt(val.count)
}, 0);

const container = document.getElementById('container');

const renderElement = (data, category, primary, secondary) => {
  const main = document.createElement('div');
  main.style.fontFamily = 'Arial';
  main.style.display = 'flex';
  main.style.flexDirection = 'column';
  
  container.appendChild(main);
  const titleDiv = document.createElement('div');
  titleDiv.style.display = 'flex';
  titleDiv.style.flexDirection = 'row';

  const title = document.createElement('div');
  title.innerHTML = `${totalMen}M`;
  title.style.marginRight = '10px';
  title.style.fontSize = '30px';
  
  const subTitle = document.createElement('div');
  subTitle.innerHTML = category;
  subTitle.style.color = 'gray';
  subTitle.style.fontSize = '14px';

  titleDiv.style.fontWeight = 800;
  titleDiv.style.alignItems = 'center';
  titleDiv.style.marginBottom = '10px';
  titleDiv.appendChild(title);
  titleDiv.appendChild(subTitle);
  
  main.appendChild(titleDiv);
  
  const flexDiv = document.createElement('div');
    flexDiv.style.padding = '20px';
    flexDiv.style.width = '360px';
  
    flexDiv.style.display = 'flex';
    flexDiv.style.flexWrap = 'wrap';

    flexDiv.style.border = '1px solid #d3d3d3';
    flexDiv.style.borderRadius = '5px';

    const labelDiv = document.createElement('div');
    labelDiv.style.width = '100%';
    labelDiv.style.marginBottom = '10px';
    labelDiv.style.fontWeight = '800';
    labelDiv.innerHTML = 'By Country';

    flexDiv.appendChild(labelDiv);
    flexDiv.style.borderRadius = '5px';

    data.forEach(item => {
    const childDiv = document.createElement('div');
    childDiv.style.width = '50%';
    childDiv.style.display = 'flex';
    childDiv.style.flexDirection = 'row';
    childDiv.style.marginBottom = '20px';
  
    
    const itemDiv = document.createElement('div');
    itemDiv.style.backgroundColor = secondary;
    itemDiv.style.display = 'flex';
    itemDiv.style.flexDirection = 'row';
    itemDiv.style.alignItems = 'center';
    itemDiv.style.padding = '10px';
    itemDiv.style.borderRadius = '5px';
    
    const countDiv = document.createElement('div');
    countDiv.style.backgroundColor = primary;
    countDiv.style.padding = '10px';
    countDiv.style.color = secondary;
    countDiv.style.marginRight = '5px';
    countDiv.style.borderRadius = '5px';
    countDiv.innerHTML = `${item.count}M`;

    const countryDiv = document.createElement('div');
    countryDiv.innerHTML = item.country;
    countryDiv.style.color = primary;

    itemDiv.appendChild(countDiv);
    itemDiv.appendChild(countryDiv);
  
  
    childDiv.appendChild(itemDiv);
  
    flexDiv.appendChild(childDiv);
    main.appendChild(flexDiv);
  });
  
}

renderElement(dataMen, 'MEN', '#38b2ac', '#d7f5f3');
renderElement(dataWomen, 'WOMEN', '#553c9a', '#e9e0ff');
renderElement(dataYouth, 'YOUTH', '#3182ce', '#cce6ff');
