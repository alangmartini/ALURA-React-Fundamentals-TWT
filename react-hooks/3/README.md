#Test

Here i tried to do the same on the Project 2, (communicating between siblings components) without
Lifting States Up.

At least the way i've done, what happens is that when i change, the other temp does change,
but with the previous value inserted.

Eg: if i put values 0 and 100 in fahrenheri
in celsius it would show

'',- 32 instead of -32, and 37.

But it turns out, i could just set the e.target.value to update both values and just
put the second one through a formula before updating. But it does
feel like a cheat and communicating between components would be a global way.