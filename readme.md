ég er með webapi á "whereuat.html", þar er button sem heitir "hvar ertu" ef ýtt er á hann fer function onSuccess(position) í gang, 
það finnur hvar þú ert með því að nota fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${key}`).
