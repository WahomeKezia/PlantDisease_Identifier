
#  Plant Disease Identifier app

<p align=center>
 
  ![image](https://github.com/WahomeKezia/PlantDisease_Identifier/assets/90443938/0c2a466f-4763-46ea-b75f-e3f315ac8dd5) 
  
</p>

## Introduction

Plants disease is a problem which may result due to various factors such as fertilizers, cultural practices followed, environmental conditions, etc. These diseases affect agricultural yield and eventually the economies.There are limited resources  at disposal for farmers  to navigate through this challange.

This projects works on a solution to brigde this gap on farm resources and creates a platform that farmers can exchange tips , empowered by a disease identifying AI platform 

## Video Walkthough 

https://github.com/WahomeKezia/PlantDisease_Identifier/assets/90443938/b4fbb355-ca13-44a6-a0fb-cdfd01578624 


## Features 

🎯 ML technology for plant disease detection from images

🎯 Real-time chatroom where farmers can share knowledge

## Backend Model API 

GitRepo:https://github.com/WahomeKezia/PlantDisease_Identifier_API/tree/main 

StreamLit App :https://plantdiseaseidentifierapi-juhnzakket7henjd4l7afy.streamlit.app/  

![image](https://github.com/WahomeKezia/PlantDisease_Identifier/assets/90443938/9ca3bada-0f27-460a-bcbd-7ffd52a70f54)


Feature Model Architecture 

![image](https://github.com/WahomeKezia/PlantDisease_Identifier/assets/90443938/8fa1911e-8af0-41a2-a243-e8d8014d02a8)

See here: https://colab.research.google.com/drive/1vE6sz_CmQ88p797cVtsdv69A2f5RxykQ?usp=sharing 


## The PlantVillage Dataset

The data set used in this project is the PlantVillage Dataset. The dataset was published by crowdAI during the ["PlantVillage Disease Classification Challenge"](https://www.crowdai.org/challenges/plantvillage-disease-classification-challenge). 

The dataset consists of about **54,305 images** of plant leaves collected under controlled environmental conditions. The plant images span the following **14 species**:

> **Apple, Blueberry, Cherry, Corn, Grape, Orange, Peach, Bell Pepper, Potato, Raspberry, Soybean, Squash, Strawberry, and Tomato.**

The dataset contains a total of **38 classes** of plant disease and **1** class of background images listed below:
|                     |                      |                        |                          | 
| :---:               |    :----:            |          :---:         |         :---:            |  
| Apple Scab          | Apple Black Rot      | Apple Cedar Rust       | Apple Healthy            |
| Blueberry Healthy   | Cherry Healthy       | Cherry Powdery Mildew  | Corn Northern Leaf Blight|
|Corn Gray Leaf Spot  |Corn Common Rust      |Corn healthy            | Grape Black Rot          |     
|Grape Black Measles  | Grape Leaf Blight    | Grape Healthy          | Bell Pepper Healthy      |
| Orange Huanglongbing|Peach Bacterial Spot  | Peach Healthy          |Bell Pepper Bacterial Spot|
| Potato Early Blight | Potato Healthy       | Potato Late Blight     |Raspberry Healthy         |
| Soybean Healthy     | Squash Powdery Mildew| Strawberry Healthy     | Strawberry Leaf Scorch   |
|Tomato Bacterial Spot| Tomato Early Blight  | Tomato Late Blight     |Tomato Leaf Mold          |
|Tomato Septoria Leaf Spot| Tomato Two Spotted Spider Mite | Tomato Target Spot |Tomato Mosaic Virus |
|Tomato Yellow Leaf Curl Virus | Tomato Healthy      |    |    |


Due to the limited computational power, it is difficult to train the classification model locally . Therefore,  use the processing power offered by Google Colab notebook as it connects us to a free TPU or GPU instance quickly and effortlessly.
Train with reduced batche-sizes and  apply other preprocessing steps like dataImageGenerator to spare memory space resourses  

## 💻Tech Stacks
</br>
<p>
<img alt="Jupyter" src="https://img.shields.io/badge/jupyter%20-%23323330.svg?&style=for-the-badge&logo=jupyter&logoColor=orange"/>
<img alt="Python" src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"/>
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23323330.svg?&style=for-the-badge&logo=html5&logoColor=red"/>    
<img alt="Reactjs" src="https://img.shields.io/badge/reactjs%20-%23323330.svg?&style=for-the-badge&logo=reactjs&logoColor=blue"/> 
</p>
</br>



## Useful Links

1. The PlantVillage dataset paper can be found [here](https://arxiv.org/abs/1511.08060).





