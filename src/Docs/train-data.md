# Détection de cible du NAC 

## Création de l'ensemble de données personnalisé

Nous créerons notre propre ensemble de données dans l'ordre suivant : on utilise d'abord Labelimg pour créer notre propre ensemble de données. Puis On utilise le serveur informatique et la carte graphique de Google Colab (ci-après dénommé Colab) ou Baidu Ai Studio (ci-après dénommé Ai Studio). À l'aide du framework Darknet, on crée notre propre ensemble de données et entraîne notre propre modèle YOLOv4 pour obtenir le fichier de poids. weights.

### Ensemble de données de la troisième partie

Comme mentionné dans l'article précédent, MS COCO, sous l'entrepôt Github de Darknet ([https://github.com/AlexeyAB/Darknet](https://github.com/AlexeyAB/Darknet)), l'auteur fournit les fichiers de poids entraînés à l'aide de l’ensemble de données MS COCO pour les tests.

En outre, il existe également un site Web de production et de partage des ensembles de données qui s’appelle « Roboflow ». Bien que le nombre d'ensembles de données sur le site Roboflow ne soit pas nombreuse, il peut être utilisé pour des tests en petits lots, et chaque ensemble de données et les données d'annotation peuvent être téléchargés dans différents formats pour correspondre à différents algorithmes de détection de cible. La capture d'écran ci-dessous montre l'ensemble de données « porter ou non un masque». 

L'ensemble de données comprend les personnes qui portent un masque et celles qui ne le portent pas. Il contient 149 images originales et données d'annotation. 

Cliquer sur le bouton YOLO Darknet TXT peut télécharger le format d’ensemble de données adapté à YOLO Darknet, soit sous forme de .zip, soit directement en utilisant le lien fourni par celui-ci pour appeler directement avant l'entraînement.

- [https://app.roboflow.com/datasets](https://app.roboflow.com/datasets)

### Création et marquage de l'ensemble de données personnalisé

1ère étape :  Obtenir un certain nombre d'images contenant la cible. 

Selon Les essais, lorsque le nombre de cibles de détection n'est pas élevé, 100 à 200 images est suffisant d’obtenir de bons résultats de détection. Dans notre ensemble de données sur les poissons d'aquarium, il n'y a que 122 images au total. Certaines de ces images de poissons d'aquarium sont directement recherchées par les moteurs de recherche, et l'autre partie provient des séquences vidéo en direct du site: bilibili.com. Les liens ci-dessous ne sont que deux d'entre eux.

- [https://live.bilibili.com/6251479](https://live.bilibili.com/6251479)

- [https://live.bilibili.com/14026851](https://live.bilibili.com/14026851)

Ici, on pout utiliser un script Python pour prendre des captures d'écran dans la vidéo. Le code est le suivant : (Il est recommandé d'utiliser Anaconda pour utiliser Python, ce qui facilitera la gestion de l'environnement. Opencv-python：pip install opencv-python doit être installé dans Anaconda Prompt pour utiliser le code ci-dessous.)

```python
##Utiliser opencv pour capturer des images vidéo à certains intervalles
## https://blog.csdn.net/xinxing__8185/article/details/48440133
import cv2

video_name = '006';
vc = cv2.VideoCapture(video_name + '.mp4') 
c=1

timeF = 200  
 
while rval:  
    rval, frame = vc.read()
    print(rval,frame)
    if(c%timeF == 0): 
        cv2.imwrite('image_raw/'+'img'+ video_name + '_' + str(c) + '.jpg',frame) 
    c = c + 1
    cv2.waitKey(1)
    print('Exporter 1 picture')
vc.release()
```

2ème étape : Utiliser [Labelimg](https://github.com/tzutalin/labelImg) pour étiqueter les cibles

（[https://github.com/tzutalin/labelImg](https://github.com/tzutalin/labelImg)）

Labelimg est un logiciel d'étiquetage des données cibles écrit en python, et les utilisateurs peuvent l'utiliser pour étiqueter les cibles dans leurs images. La méthode d'utilisation est également très pratique. On a utilisé la solution Windows + Anaconda qui est la plus simple : installez d'abord Anaconda (Python 3 et supérieur), puis ouvrez Anaconda Prompt pour installer pyqt5 et lxml:

```python
conda install pyqt=5
conda install -c anaconda lxml
```

Cloner Labelimg vers le local ou téléchargez le package compressé zip vers le local, utilisez Anaconda Prompt pour ouvrir le dossier Labelimg (le chemin doit être modifié en fonction de votre situation réelle):

```python
cd C:\Users\sheld\Downloads\labelImg-master
pyrcc5 -o libs/resources.py resources.qrc
python labelImg.py
```

Ensuite, GUI de Labelimg va être ouverte. Car il s'agit d'une interface d'opération graphique, l'opération est simple : appuyez sur la touche w du clavier pour dessiner rapidement un cadre.

Attention à :

1. Si vous devez utiliser YOLO comme format de sortie de données, vous devez le définir sur le côté gauche du logiciel.
2. Chaque fois qu'une image est dessinée, elle doit être sauvegardée, bien sûr, vous pouvez également utiliser son mode "sauvegarde automatique".
3. S'il n'y a qu'un seul type d'objet, vous pouvez utiliser le mode "étiquetage cible unique", qui est plus efficace.
4. Chaque image sera enregistrée séparément sous forme de fichier txt, le contenu correspond aux coordonnées de la boîte dessinée.

## Entraînement de l'ensemble de données personnalisé

### Entraînement de données sur local

1. Anaconda

(Utiliser Python pour gérer certaines opérations répétitives sans signification, telles que le changement de nom de fichier et la capture vidéo.)

2. Labelimg 

(Utilisé pour l'étiquetage des objets. Il peut être obtenu directement sur github, mais il faut installer l'environnement Python après l'avoir obtenu.)

Si vous utilisez votre propre environnement local pour la configuration, vous devez installer Nvidia Cuda et CuDNN pour accélérer l’entraînement, et vous avez également besoin d'une grande carte graphique haute performance. Mais si vous utilisez Ai Studio ou Colab pour l’entraînement, les deux sont équipés de cartes graphiques NVIDIA Tesla avec 16 Go de mémoire.

### Entraînement de données sur AI Studio ou Colab

Darknet YOLOv4 est utilisé pour l’entrainement, la configuration sur le serveur informatique. Il peut être obtenu directement sur github, mais il ne peut pas être utilisé directement après l'avoir obtenu, il faut le compiler nous-même

- Ai Studio ：[https://aistudio.baidu.com/](https://aistudio.baidu.com/)
- Colab：[https://Colab.research.google.com/](https://Colab.research.google.com/)

On a choisi d’utiliser Colab pour entraîner notre ensemble de données.

## L’entrainement d’un ensemble de données sur Google Colab

### Préparation environnementale

Le processus approximatif est le suivant : 

(Le processus détaillé peut être trouvé dans le fichier. ipynb)

1. Vérifiez le numéro de version de Cuda et le modèle de la carte graphique, téléchargez, installez et configurez le CuDNN correspondant.
2. Regardez le modèle de la carte graphique : pour Colab, c’est un NVIDIA Tesla T4 avec 16 Go de mémoire vidéo. Et pour Ai Studio, c’est un NVIDIA Tesla V100 avec 16 Go de mémoire vidéo. 
3. Installez CuDNN en fonction du modèle de carte graphique et de la version de Cuda.
4. Installez Darknet

- Clonez Darknet depuis [https://github.com/roboflow-ai/Darknet.git](https://github.com/roboflow-ai/Darknet.git) et décompressez-le.
- Modifiez le Makefile dans le dossier Darknet pour utiliser GPU et CuDNN.
- Utilisez la commande « make » pour compiler Darknet.
- Téléchargez le fichier « YOLOv4 ConvNet weights » et placez-le dans le dossier Darknet : yolov4.conv.137`.

5. Mettez votre propre ensemble de données et décompressez-le dans le dossier Darknet.

### Modification du fichier de configuration

1. Créez et configurez les fichiers : obj.data, train.txt, valid.txt, etc.
2. Créez et configurez le fichier personnalisé de YOLOv4 : custom-yolov4-detector.cfg.

### Début de l'entraînement

1. Utilisez «. /Darknet detector train data/obj.data cfg/custom-yolov4-detector.cfg yolov4.conv.137 -dont_show -map » pour l’entraînement. (L'entraînement dure environ 10 heures. Un fichier de poids sera généré sous le dossier « backup » de temps en temps)
2. Après l’entrainement, le dernier fichier est « custom-yolov4-detector_final. weights ».

## Vérification des résultats d’entraînement

1. La méthode de vérification la plus simple peut être effectuée directement dans le dossier Darknet après l’entraînement.
2. Téléchargez un programme de Python qui s’appelle « [PySimpleGUI-YOLO](https://github.com/PySimpleGUI/PySimpleGUI-YOLO) ». Décompressez-le après le téléchargement. Après avoir installé le package « opencv-python » et « pysimplegui » avec Anaconda, on peut l'exécuter.