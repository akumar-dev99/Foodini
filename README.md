## File Structuring

Place code for screens under `sceens` folder. Please stick to the naming convention
`{screen-name}Screen.js`, for example `DishesScreen`. Keep structure of assets folder as is:
keep images in `images` folder and fonts in `fonts` folder.  

Components should be organized by the screens they are used in. For example, `restaurantCard.js` 
component should be stored in folder `RestaurantScreen` under components, as it will be used for that
screen. 

#### For example

```
Components
|
|__Restaurant Screen
|  |
|  |__restaurantCard.js
|  |__restaurantSuggestions.js
|
|__Dishes Screen
   |
   |__spiceMeter.js
   |__dishCard.js
...
```

Note althought `spiceMeter` is a component that will be used in `dishCard`, another component, they should still
be placed according to the screen they are associated with.

This will help reduce merge conflicts greatly.