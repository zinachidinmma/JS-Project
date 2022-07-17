/* Finding the diagonal of a square*/

    let opposite=9;
    let adjacent=9;
    let newOpposite=(opposite**2);
    let newAdjacent= (adjacent**2);
    let hypotenuse=(newOpposite + newAdjacent);
    console.log(hypotenuse);
    let diagonal= Math.sqrt(hypotenuse);
    console.log("The diagonal of the square is" + " " + diagonal);

/*Finding the area of a triangle*/
    let length_of_triangle =5;
    let breadth_of_triangle=6;
    let height_of_triangle=7;
    let semi_parameter= (length_of_triangle+breadth_of_triangle+height_of_triangle)/2;
    let area= Math.sqrt((semi_parameter*((semi_parameter-length_of_triangle)*(semi_parameter-breadth_of_triangle)*(semi_parameter-height_of_triangle))));
    console.log("The area of this triangle is" + " " + area);
   
    

    /*circumference and area of a circle*/
    const PI = 22/7;
    let radius = 4;
    let circumference= (2*PI*radius);
    console.log("The circumference of this circle is" + " " + circumference);
    let surfaceArea= (PI*(radius**2));
    console.log("The surface are of this circle is" + " " + surfaceArea);