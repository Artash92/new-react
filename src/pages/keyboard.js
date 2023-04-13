import React, { useState } from 'react';

const Keyboard = () => {
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('en');
  const [isShiftEnabled, setIsShiftEnabled] = useState(false);

  const handleClick = (char) => {
    setValue(value + (isShiftEnabled ? char.toUpperCase() : char));
  };


  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsShiftEnabled(false);  
  };

  const handleShiftToggle = () => {
    setIsShiftEnabled(!isShiftEnabled);
  };


  

  let characterButtons = null;
  let uppercaseCharButtons = null;

  switch (language) {
    case 'en':
      
    const characters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

        characterButtons = (
          <div>
            {characters.map((char) => (
              <button className={isShiftEnabled ? 'shift-enabled' : ''} onClick={() => handleClick(char)}>{char}</button>
            ))}
          </div>
        );
        const uppercaseLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
   
         uppercaseCharButtons =  (
          <div>
            {uppercaseLetters.map(letter =>
          <button className={isShiftEnabled ? '' : 'shift-enabled'} onClick={() => handleClick(letter)}>{letter}</button>
        )}
          </div>
        );
      break;
    case 'am':
     
    const charArr = ['ա', 'բ', 'գ', 'դ', 'ե', 'զ', 'է', 'ը', 'թ', 'ժ', 'ի', 'լ', 'խ', 'ծ', 'կ', 'հ', 'ձ', 'ղ', 'ճ', 'մ', 'յ', 'ն', 'շ', 'ո', 'չ', 'պ', 'ջ', 'ռ', 'ս', 'վ', 'տ', 'ր', 'ց', 'ւ', 'փ', 'ք', 'և', 'օ', 'ֆ'];

    characterButtons = (
      <div>
        {charArr.map((char) => (
          <button className={isShiftEnabled ? 'shift-enabled' : ''} onClick={() => handleClick(char)}>{char}</button>
          
        ))}
      </div>
    );
    
    const uppercaseArmenianAlphabet = ['Ա','Բ','Գ','Դ','Ե','Զ','Է','Ը','Թ','Ժ','Ի','Լ','Խ','Ծ','Կ','Հ','Ձ','Ղ','Ճ','Մ','Յ','Ն','Շ','Ո','Չ','Պ','Ջ','Ռ','Ս','Վ','Տ','Ր','Ց','ՈՒ','Փ','Ք','ԵՎ','Օ','Ֆ'];

    
    uppercaseCharButtons =  (
      <div>
        {uppercaseArmenianAlphabet.map(letter =>
      <button className={isShiftEnabled ? '' :'shift-enabled'} onClick={() => handleClick(letter)}>{letter}</button>
    )}
      </div>
    );


break;
case 'ru':
  const RusianCharacters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];


  characterButtons = (
    <div>
      {RusianCharacters.map((char) => (
        <button className={isShiftEnabled ? 'shift-enabled' : ''} onClick={() => handleClick(char)}>{char}</button>
      ))}
    </div>
  );
  const uppercaseRussianAlphabet = [ 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

    
  uppercaseCharButtons = (
    <div>
      {uppercaseRussianAlphabet.map(letter => 
    <button className={isShiftEnabled ? '' : 'shift-enabled'} onClick={() => handleClick(letter)}>{letter}</button>
      )}
    </div>
  );
break;
default:
break;
}

return (
<div class="keyboard">
  <div class="output">{value}</div>
  <div class="options">
    <div class="language-buttons">
      <button className="language-button en" onClick={() => handleLanguageChange('en')}>ENG</button>
      <button className="language-button am" onClick={() => handleLanguageChange('am')}>ՀԱՅ</button>
      <button className="language-button ru" onClick={() => handleLanguageChange('ru')}>РУС</button>
    </div>
  </div>
  <div className="buttons">
    {isShiftEnabled ? uppercaseCharButtons : characterButtons}
  </div>
 
   <div className='btns'>
   <button className={`shift-button ${isShiftEnabled ? 'shift-enabled' : ''}`} onClick={handleShiftToggle}>Shift</button>
  <button className='probel-button'  onClick={() => handleClick(' ')}>space</button>
    <button className="delete-button" onClick={handleDelete}>Delete</button>
   </div>
</div>

);
};






export default Keyboard;