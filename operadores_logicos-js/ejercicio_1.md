# Siendo X, Y y Z valores booleanes cuyos valores son: X = true, Y = false y Z = true, determine el valor de cada expresión lógica:

a. (X && Y) || (X && Z)
b. (X || !Y) && (!X || Z)
c. X || Y && Z  nota: el operador && tiene mas peso que el || , por lo tanto se realiza primero el (Y && Z)
d. !(X || Y) && Z
e. X || Y || X && !Z && !Y
f. !X || !Y || Z && X && !Y



a. (true && false) || (true && true) = *true* 
b. (true || true) && (false || true) = *true*
c. true || false && true = *false*
d. !(true || false) && true = *false*
e. true || false || true && !true && !false = true || false || true && false && true = *true*
f. !true || !false || true && true && !false = false || true || true && true && true = *true*