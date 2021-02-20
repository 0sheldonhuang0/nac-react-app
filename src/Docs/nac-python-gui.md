## Application de bureau

PySimpleGUI est une boîte d’outils simple pour créer un Python GUI. Il transforme les bibliothèques de GUI de Python bien connues telles que tkinter, pyQt et WxPython en bibliothèques de développement d'interfaces qui sont portables et conviviales.

## Les étapes de création

### Partie d’interface

#### firebase_login

On prend l’interface de connexion comme exemple.

- Il est recommandé d'installer les fichiers de la bibliothèque de gestion d’Anaconda et d'utiliser Python.
- Utiliser « Anaconda Prompt » pour installer PySimpleGUI. Si vous êtes invité à installer d'autres packages d'installation pendant le processus d'installation, installez-le :

```python
pip install PySimpleGUI
```

- Importer des documents :

```python
import PySimpleGUI as sg
```

Créer une interface PySimpleGUI. Il y a deux variables qui doivent être soumises dans cette interface : l'une est le courriel de l'utilisateur et l'autre est le mot de passe de l'utilisateur. Après avoir cliqué sur le bouton OK, la vérification « try » peut être exécutée. L'interface comprend les éléments suivants, un titre et une image, deux zones de saisie et deux boutons :

- `sg.Text`  (Créer le texte, c’est possible de définir la police, la taille, la couleur et la position.)
- `sg.Image` (Importer l'image, si elle doit être disposée dans la même ligne que le texte ci-dessus, elle doit être écrite dans le même tableau.)
- `sg.OK`, `sg.Cancel`  (Ce sont deux boutons avec du texte fixe. Bien sûr, c’est possible de créer un bouton personnalisé. Lorsque l'événement de clic est « Cancel » ou que l'utilisateur clique pour fermer, l'application se ferme ; sinon, les étapes de connexion seront exécutées :

```python
sg.ChangeLookAndFeel('Reddit')
layout = 	[
    [sg.Text('Connectez-vous à votre compte', size=(30,1), font=('Helvetica',12),text_color='#1c86ee' ,justification='left'),\
     sg.Image(r'images\nac-logo.png',key = "_WEATHER_IMG_",size=(100, 50))],
    [sg.Text('Email'), sg.In(size=(40,1), key='_USER_EMAIL_')],
    [sg.Text('Password'), sg.In(size=(40,1), key='_USER_PASSWORD_')],
    [sg.OK(), sg.Cancel()]
]
win = sg.Window('Test vidéo pour YOLOv4 - NAC',
                default_element_size=(21,1),
                text_justification='left',
                auto_size_text=False).Layout(layout)
event, values = win.Read()
if event is None or event =='Cancel':
    sys.exit()

UserEmail = values['_USER_EMAIL_']
UserPassword = values['_USER_PASSWORD_']

auth = firebase.auth()

try:
    # Connexion 
    user = auth.sign_in_with_email_and_password(UserEmail, UserPassword)
    sg.popup('Connection réussi！Welcome', UserEmail)
    pickle.dump(user,open('user_info.txt','wb'))
    userUniqueId = UserEmail.replace("@","__").replace(".","_")
    pickle.dump(userUniqueId,open('user_id.txt','wb'))        
except:
    sg.popup(' Quelques erreurs rencontrées !, L’adresse email et/ou le mot de passe sont incorrects, veuillez-les corriger！')
win.Close()
```

#### yolovideowith_webcam

Ci-dessous est partie du code principal de l'interface de la fonction principale. 

- `sg.In` (Zone de saisie.)
- `sg.Slider` (Curseur, c’est possible de définir la plage de valeur.)
- `sg.Button`  (Similaire à ce qui précède, mais un nouveau bouton est défini; il s'exécutera après être cliqué)
- `sg.FileBrowse` (Bouton pour parcourir le fichier)
- `sg.FolderBrowse`  (Bouton pour parcourir le dossier)

```python
i_vid = r'videos\003_x264.mp4'
o_vid = r'output\car_chase_01_out.mp4'
y_path = r'yolo-coco'
sg.ChangeLookAndFeel('Reddit')
layout = 	[
		[sg.Text('Test vidéo pour YOLOv4 - NAC', size=(28,1), font=('Helvetica',18),text_color='#1c86ee' ,justification='left'),\ # 换行
             sg.Image(r'images\nac-logo.png',size=(100, 50))],
		[sg.Text('Chemin de la vidéo'), sg.In(i_vid,size=(40,1), key='input'), sg.FileBrowse()],
		[sg.Text('Chemin de la Yolo'), sg.In(y_path,size=(40,1), key='yolo'), sg.FolderBrowse()],
		[sg.Text('Confiance'), sg.Slider(range=(0,1),orientation='h', resolution=.1, default_value=.5, size=(15,15), key='confidence')],
		[sg.Text('Seuil'), sg.Slider(range=(0,1), orientation='h', resolution=.1, default_value=.3, size=(15,15), key='threshold')],
		[sg.Text(' '*8), sg.Checkbox('Utiliser la webcam', key='_WEBCAM_')],
		[sg.Button('Connecxion avec votre compte'),sg.OK(), sg.Cancel()]
			]

win = sg.Window('Test vidéo pour YOLOv4 - NAC',
				default_element_size=(21,1),
				text_justification='left',
				auto_size_text=False).Layout(layout)
event, values = win.Read()
if event is None or event =='Cancel':
	exit()
if event == 'Connecxion avec votre compte':
 	firebase_login.firebaseLogin()
use_webcam = values['_WEBCAM_']
args = values

win.Close()
```

L’interface suivante est divisée en colonnes gauche et droite :

- `position_elem = win.FindElement('_POSITION_')`  (Trouver les elements dont le « key » est « _POSITION_ » dans l'interface.)

- `position_elem.Update(targetPosition)` (Renouveler les éléments trouvés ci-dessus avec une nouvelle valeur.)

- `event, values = win.Read(timeout=0)` (Obtenir tous les données et les variables de GUI.) 
- `gui_confidence = values['confidence']` (Obtenir les variables de GUI.)
- `firebase_login.firebaseUploadData(targetPositionObject,timeRightNow)` (Appeler la fonction de « firebaseUploadData » dans le fichier « firebase_login ».)

```python
if not win_started: # if win_started is not None
		win_started = True
		sg.SetOptions(text_justification='Center') 
        # colonne gauche
		left_col =  [#Éléments d'interface#]
        # colonne droite
		right_col = [#Éléments d'interface#]
		layout = [
			[sg.Column(left_col, element_justification='c'), sg.VSeperator(),
			sg.Column(right_col, element_justification='c')]
		]
        
		win = sg.Window('YOLO Output',
						default_element_size=(14, 1),
						text_justification='left',
						auto_size_text=False).Layout(layout).Finalize()
		position_elem = win.FindElement('_POSITION_')
	else:
		position_elem.Update(targetPosition)

	event, values = win.Read(timeout=0)
 
	if event is None or event == 'Exit':
		break
	gui_confidence = values['confidence']

	loopTimes=loopTimes+1
	if loopTimes % loopInterval == 0:
		timeRightNow = round(time.time());
		cv2.imwrite('image_raw/'+ str(timeRightNow) + '.jpg',frame)  
		firebase_login.firebaseUploadData(targetPositionObject,timeRightNow)
```

### La partie de détection

Le test utilise le fichier de poids entraîné par OpenCV-Python combiné avec YOLOv4-darknet. Le code complet de la partie test peut être regardé sur l'adresse suivante : [0sheldonhuang0/nac-python-gui (github.com)](https://github.com/0sheldonhuang0/nac-python-gui). Le « coco.names » contient les noms des cibles à détecter, et chaque étiquette est associée à une couleur différente pour les distinguer facilement.

```python
labelsPath = os.path.sep.join([args["yolo"], "coco.names"])
LABELS = open(labelsPath).read().strip().split("\n")

np.random.seed(1)
COLORS = np.random.randint(0, 255, size=(len(LABELS), 3),dtype="uint8")
```

Charger les fichiers « YOLO weight » et « Config » :

- Utiliser « cv2.dnn.readNetFromDarkneta » pour charger le réseau。
- YOLO contient de nombreuses couches, « getUnconnectedOutLayersNames() » est utilisé pour extraire les noms des couches de sortie.

```python
# Charger les fichiers « YOLO weight » et « Config »
weightsPath = os.path.sep.join([args["yolo"], "custom-yolov4-detector_final.weights"])
configPath = os.path.sep.join([args["yolo"], "custom-yolov4-detector.cfg"])

# Charger le fichier YOLO
print("[INFO] loading YOLO from disk...")
net = cv2.dnn.readNetFromDarknet(configPath, weightsPath)
ln = net.getLayerNames()
ln = [ln[i[0] - 1] for i in net.getUnconnectedOutLayers()]

# Initialiser la vidéo, sorter la fréquence d'images et la taille de l'écran de la vidéo
vs = cv2.VideoCapture(args["input"])
writer = None
(W, H) = (None, None)
```

Lire les données de l'image suivante dans la vidéo ou la caméra :

```python
if use_webcam:
    grabbed, frame = cap.read()
else:
    grabbed, frame = vs.read()
 
    zone_width = int(vs.get(cv2.CAP_PROP_FRAME_WIDTH))/4

    zone_height = int(vs.get(cv2.CAP_PROP_FRAME_HEIGHT))/2
Détecter chaque image, « frame » est l’image obtenue à partir du vidéo:
	# Si la taille de chaque image est vide, saisissez-la
	if W is None or H is None:
		(H, W) = frame.shape[:2]
    
	blob = cv2.dnn.blobFromImage(frame, 1 / 255.0, (416, 416),
		swapRB=True, crop=False)
	net.setInput(blob)
	start = time.time()
	layerOutputs = net.forward(ln)
	end = time.time()
```

Initialiser la boîte englobante, la confiance et le tableau de type des cibles, puis extraire cycliquement chaque couche de sortie. Il peut y avoir plusieurs boîtes dans chaque couche.

Extraire le type et la confiance de de la cible actuelle. Étant donné que la valeur la plus basse de la confiance peut être définie par soi-même, la partie dont le résultat de détection est inférieur à la valeur la plus basse est rejetée. Enfin, les coordonnées de la boîte et d'autres informations nécessaires sont obtenues, qui seront finalement affichées sur la photo.

```python
boxes = []
	confidences = []
	classIDs = []


	for output in layerOutputs:
	
		for detection in output:
			
			scores = detection[5:]
			classID = np.argmax(scores)
			confidence = scores[classID]

			if confidence > gui_confidence:
      
				box = detection[0:4] * np.array([W, H, W, H])
				(centerX, centerY, width, height) = box.astype("int")

				x = int(centerX - (width / 2))
				y = int(centerY - (height / 2))

				boxes.append([x, y, int(width), int(height)])
				confidences.append(float(confidence))
				classIDs.append(classID)

    # gui_confidence：Seuil de confiance
    # gui_threshold：Seuil de suppression non maximale (pour régler la tolérance aux pannes)
	idxs = cv2.dnn.NMSBoxes(boxes, confidences, gui_confidence, gui_threshold)
	targetPosition = []
	targetDetailNumber = []
	zone_info = []
```

À ce stade, le programme peut détecter les objets cibles et leurs positions contenues dans chaque image de la vidéo d'entrée ou de la vidéo de la caméra, et les marquer avec des cases, des noms et des informations de confiance.

L'étape suivante passera à l'interface « yolo_video_with_webcam » dans la section d’interface de la section précédente, et les images et les données cibles peuvent être télécharger sur Firebase et local à intervalles réguliers.

```python
# Assurer au moins une boîte existe pour chaque objet
if len(idxs) > 0:
    # Dessiner cycliquement la bordure enregistrée
    for i in idxs.flatten():
        # Extraire les coordonnées et la largeur
        (x, y) = (boxes[i][0], boxes[i][1])
        (w, h) = (boxes[i][2], boxes[i][3])

        targetDetailNumber.append(classIDs[i])
        targetPosition.append([x+w/2,y+h/2]) # 每一帧的目标数量和位置

        # [[793.0, 517.0], [796.5, 423.0], [841.5, 367.0], [889.5, 499.5], 
        # [1001.5, 584.0], [254.5, 480.5], [204.0, 420.5], [693.5, 343.5], 
        # [73.0, 504.0], [123.5, 368.5], [752.0, 280.0], [1017.0, 508.5], 
        # [1232.0, 683.0], [14.5, 473.5], [398.0, 86.0], [1225.0, 374.5], 
        # [1097.0, 139.5], [1098.0, 600.5], [61.5, 172.5], [723.0, 140.0], 
        # [863.0, 174.0]]
        print(targetPosition)
        # [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0]
        print(targetDetailNumber)

        # Dessiner des bordures et des étiquettes
        color = [int(c) for c in COLORS[classIDs[i]]]
        cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
        text = "{}: {:.4f}".format(LABELS[classIDs[i]],
                                   confidences[i])
        cv2.putText(frame, text, (x, y - 5),
        cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)
```

## Interface et interaction

L'interface de surveillance est représentée comme les trois images : Fig. 4.1.1-1, Fig. 4.1.1-2, Fig. 4.1.2-1, mais elle peut être différente de l'interface finale. 

L'utilisateur exécutera le fichier « exe » pour démarrer le terminal bureau dans des situations normales.

- Les deux zones de saisie supérieures de la première page peuvent être testées : si l'utilisateur dispose du fichier vidéo cible et du fichier « weight » correspondant, il peut être importé à partir d'ici (Attention : le chemin pour importer les fichiers et les dossiers est un chemin relatif). L'utilisateur peut sélectionner le niveau de confiance et le seuil, et l'utilisateur peut faire une prédiction après avoir cliqué sur OK.

- Si l'appareil de l'utilisateur est équipé d'une caméra, il peut cocher l'option « Utiliser la caméra » et cliquer sur OK pour identifier et détecter l'image capturée par la caméra.

- L'utilisateur ne pourra ajuster la confiance et le seuil de détection que sur la page de reconnaissance, et d'autres options de réglage seront placées sur la page des paramètres. L'intervalle de téléchargement ne peut pas être ajusté dans la version actuelle, mais il est pris en considération.

Si l'utilisateur a le compte et le mot de passe de ce système, il peut se connecter via le bouton dans le coin en bas gauche. Si la connexion réussit, le logiciel sur bureau téléchargera les données et les images cibles détectées par l'utilisateur vers Firebase à intervalles réguliers. Si l'utilisateur n'est pas connecté, le téléchargement ne pourra pas réussir à les charger et il peut y avoir une erreur dans la version actuelle.

- Le compte et le mot de passe de l'utilisateur peuvent être enregistrés et définis via le terminal Web.

- L'utilisateur peut voir les commentaires correspondants après s'être connecté au compte. Si la connexion réussit, cela montrera que l'utilisateur s'est connecté avec succès, mais la connexion actuelle est valide pendant une heure.

## Brève description du processus de réalisation des fonctions

### L’utilisation de Python GUI du NAC （Pour les développeurs）

Les développeurs peuvent télécharger le code source de ce programme directement depuis Github. Il est recommandé d'utiliser Anaconda et Spyder pour l'édition, il a besoin d’installer les packages suivants. Si le package est toujours absent, c’est possible de télécharger simplement le package correspondant.

- OpenCV-Python

- Pyrebase4

- PySimpleGUI

- Numpy

- imutils

Après avoir installé la bibliothèque, l'état en direct de la détection de cible peut être vu après l'exécution.

### Transfert de données entre Python et Firebase

Pour transférer des données entre Python et Firebase, il faut installer des packages supplémentaires, voici un package SDK amélioré qui peut être utilisé : https:// github.com/nhorvath / Pyrebase4. 

(Remarque : le package SDK fourni par le site Web officiel permet aux administrateurs de gérer les données et les comptes par lots.)

```python
pip install pyrebase4
```

Connecter à Google Firebase pour créer une nouvelle application. Après la création, rechercher le fichier de configuration Firebase dans le chemin suivant : 

Paramètres --> Paramètres du projet --> Votre application --> Firebase SDK snippet --> Configuration -->copier les codes similaires comme ci-dessous :

```python
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "QWERT",
  authDomain: "QWERT.firebaseapp.com",
  databaseURL: "https://QWERT.firebaseio.com",
  projectId: "QWERT",
  storageBucket: "QWERT.appspot.com",
  messagingSenderId: "00000000",
  appId: "QWERT",
  measurementId: "QWERT"
};
```

Les codes ci-dessous ne sont que les parties importantes, et le code source peut être regardé vers Github. Tout d'abord, les packages appropriés doivent être introduits :

```python
import pyrebase
```

#### Authentification d'utilisateur : Auth

Initialiser Firebase, appeler le module d'authentification utilisateur :

```python
firebase = pyrebase.initialize_app(firebaseConfig) 
pickle.dump(firebase,open('firebase_info.txt','wb')) 
auth = firebase.auth()
```

Ici, seuls l'adresse e-mail de l'utilisateur et le mot de passe défini sont utilisés pour la vérification. Si la vérification réussit, une fenêtre contextuelle réussie s'affiche. 

Enregistrer le jeton vérifié localement pour que d'autres fonctions puissent l’appeler.

(Puisque Firebase ne prend pas en charge les symboles spéciaux tels que @, si vous devez enregistrer ces symboles spéciaux, vous devez les modifier selon vos préférences personnelles.)

```python
user = auth.sign_in_with_email_and_password(UserEmail, UserPassword)
sg.popup('Connexion réussite! Welcome', UserEmail)
pickle.dump(user,open('user_info.txt','wb'))
userUniqueId = UserEmail.replace("@","__").replace(".","_")
pickle.dump(userUniqueId,open('user_id.txt','wb'))  
```

#### Upload les données : Realtime database

Importer les données de connexion et les informations d'identification de l'utilisateur (Remarque: Actuellement, les informations d'identification sont valides pendant une heure, mais elles peuvent être renouvelées) :

```python
# Lire des données 
firebase = pickle.load(open('firebase_info.txt','rb'))
user = pickle.load(open('user_info.txt','rb'))
```

Obtenir des références aux services de base de données (Realtime database) et de stockage dans le cloud (Storage) :

```python
# Obtenir une référence au service de base de données
db = firebase.database()
storage = firebase.storage()
```

Le type de données à upload est le format « json ».

```python
dataUser = {
    "setup":{"time_update":300},
    "zone_name":["manger","libre","manger","libre",
                 "manger","libre","manger","libre"],
}
```

Upload « dataUser » sur le nœud « user / userUniqueId», « userUniqueId» est le numéro d'identification spécifique à l'utilisateur (défini par vous-même) et le  « user['idToken'] » est la vérification d'identité de l'utilisateur (sinon, le téléchargement échouera). Une fois le upload terminé, comme indiqué ci-dessous :

```python
db.child("users").child(userUniqueId).set(dataUser, user['idToken'])
```

#### Charger les fichiers comme les images sur Storage

Charger des images et d'autres fichiers sur Firebase Storage, l'opération est similaire à la précédente. Dans l'exemple ci-dessous, le fichier local est stocké sous le dossier « image_raw / » et est nommé d'après un horodatage. 

Utiliser « put » pour charger le fichier vers le chemin « userUniqueId/ ». « UserUniqueId » est un ID d'identification spécifique à l'utilisateur (défini par vous-même). Il convient de noter qu'il n'est pas nécessaire d'écrire un suffixe de fichier à l'emplacement « child », sinon le chargement ne sera pas réussi. 

```python
storage.child(userUniqueId + "/" + str(timeStamp)).put('image_raw/'+ str(timeStamp) + '.jpg', user['idToken'])
```

## Références

- [nhorvath/Pyrebase4: A simple python wrapper for the Firebase API. (github.com)](https://github.com/nhorvath/Pyrebase4)
- [Firebase Realtime Database (google.com)](https://firebase.google.com/docs/database?authuser=0)
- [Cloud Storage | Firebase (google.com)](https://firebase.google.com/docs/storage?authuser=0)
- [https://firebase.google.com/docs/database/rest/structure-data](https://firebase.google.com/docs/database/rest/structure-data)

