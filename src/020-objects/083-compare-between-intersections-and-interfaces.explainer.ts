// https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections

//In general probably always use interfaces unless you must (or want to for some reason) use a type
//TypeScript prefers extending interfaces over types intersections
//Keeping it basic you might as well use either such as REACT props - at that level both are good enough and equivalent