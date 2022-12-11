Demo: https://sudhir9297.github.io/misfit-product/

![misfit-product](https://user-images.githubusercontent.com/19578447/206888725-18004b51-f882-4f6c-bbe3-e1ea8e8eb559.png)

## Installation

Install Misfit-product with npm

First remove below line from package.json

```bash
  "homepage": "https://sudhir9297.github.io/misfit-product",
```

its due to the paths of model and HDR map,
And Now run below command in project

```bash
  npm install
  npm start
```

# How to make it work with your glb files

Well its super easy, here are few steps

#### **Step1:**

add your .glb file in public folder and name give it a desired name.
for example i'll name it `new.glb`

#### **Step2:**

now go to `/src/Layout/canvas.jsx` and on line no. 125 replace `const chair = 'chairs.glb';`
with `const chair = 'new.glb';`.

#### **Step3:**

now lets assume if my model( new.glb ) have two meshes and want to affect both of them
(let's name them as `first_mesh_name` and `second_mesh_name`)

now go to `/src/data/index.js`

each object has a property called **itemList** which contains mesh name as **upholstry** and they contain what they are affecting ... so as per demo its `color`.

so just replace it with your mesh names as shown below.
Yes Yes! you can add as many as you need.

```bash
itemList: {
      first_mesh_name: {
        color: '#00ff00',
      },
      second_mesh_name: {
        color: '#ff0000',
      },
    }
```

**NOTE:** The function which apply color runs in two loops so its `O(n^2)` so use wisely.
