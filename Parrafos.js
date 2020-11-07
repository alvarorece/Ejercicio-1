for(const property in asignatura){
    const p = document.createElement('p');
    const propertyText = document.createTextNode(property+': '+asignatura[property]);
    p.appendChild(propertyText);
    document.body.appendChild(p);
}