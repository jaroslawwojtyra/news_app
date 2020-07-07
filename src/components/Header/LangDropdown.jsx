import React from 'react';
import './LangDropdown.css';
const languages = ['ae', 'ar', 'za', 'at', 'au', 'be',
'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz',
'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id',
'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv',
'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph',
'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg',
'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've',];

class LangDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'pl'
    };
  };

  onValueChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onLangChange(value);
};

  render() {
    console.log(this.state);
    const { value } = this.state;
console.log({ value });
    return (
      <div id="Lang">
        <label>Język:</label>
        <select value={value} onChange={this.onValueChange}>
          {languages.map((lang) =>
            <option key={lang} value={lang}>{lang}</option>
          )}
        </select>
      </div>
    );
  };
};

export default LangDropdown
