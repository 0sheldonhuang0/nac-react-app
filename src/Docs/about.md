## À propos
Ce projet utilise la technologie et les algorithmes de vision industrielle pour identifier et détecter les activités quotidiennes de certains types de NAC.

## Comment ça fonctionne ?

Ce projet utilise `Imglabel` pour l'étiquetage des données et `YOLOv4-Darknet` pour l'entrainement avec `Google Colab`.

Le version de bureau utilise `OpenCV-Python` pour identifier les cibles et télécharger les résultats de détection sur `Google Firebase`. Vous pouvez visiter votre espace à https://nac-app.netlify.app/nac/espace pour observer le dernier statut de votre NAC.

Vous pouvez visiter votre espace et observer l'état de vos animaux de compagnie sur **n'importe quel appareil**. Actuellement, il peut détecter NAC (nouveaux animaux de compagnie) tels que les poissons, les hamsters et les oiseaux. 

[Cliquez ici](https://nac-app.netlify.app/nac/user-guide) pour plus de détails.

## Comment l'utiliser?

Pour utiliser ce système pour surveiller votre animal de compagnie, vous avez besoin de :

- Un appareil en réseau avec une caméra. Cela peut être Mac, Windows ou Linux. Veuillez [cliquer ici](https://nac-app.netlify.app/nac/nac-python-gui) pour connaître la mode d'emploi.
- Un compte. Vous pouvez [enregistrer votre compte ici](https://nac-app.netlify.app/nac/espace) pour observer votre animal de compagnie à distance.

## Améliorer ce projet

Vous pouvez trouver ce projet ici:

- [https://nac-app.netlify.app/](https://nac-app.netlify.app/)
- [0sheldonhuang0/nac-react-app (github.com)](https://github.com/0sheldonhuang0/nac-react-app)
- [0sheldonhuang0/nac-python-gui (github.com)](https://github.com/0sheldonhuang0/nac-python-gui)

## Sécurité des données

Ce projet utilise `Google Firebase` pour héberger des données, même l'administrateur n'obtiendra pas votre mot de passe.

