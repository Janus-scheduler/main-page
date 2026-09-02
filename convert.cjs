const fs = require('fs');

const html = fs.readFileSync('/Users/chathurakumara/Desktop/janus web page/design/Janus Scheduler Landing Page.dc.html', 'utf-8');
const lines = html.split('\n');
const targetLines = lines.slice(280, 529);

let jsx = targetLines.join('\n');

// Convert HTML to JSX
jsx = jsx.replace(/class=/g, 'className=');
jsx = jsx.replace(/<!--/g, '{/*').replace(/-->/g, '*/}');
jsx = jsx.replace(/style="([^"]+)"/g, (match, p1) => {
  const styles = p1.split(';').filter(s => s.trim() !== '').reduce((acc, style) => {
    let [key, ...values] = style.split(':');
    if(!key) return acc;
    key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
    let value = values.join(':').trim();
    if(value.includes('{{')) {
      value = '`' + value.replace(/{{([^}]+)}}/g, '${$1}') + '`';
    } else {
      value = `'${value}'`;
    }
    acc.push(`${key}: ${value}`);
    return acc;
  }, []);
  return `style={{ ${styles.join(', ')} }}`;
});

jsx = jsx.replace(/onClick="{{([^}]+)}}"/g, 'onClick={$1}');
jsx = jsx.replace(/style="{{([^}]+)}}"/g, 'style={$1}');
jsx = jsx.replace(/{{([^}]+)}}/g, '{$1}');

// Convert sc-if
jsx = jsx.replace(/<sc-if value=\{([^}]+)\}[^>]*>/g, '{$1 && (\n');
jsx = jsx.replace(/<\/sc-if>/g, '\n)}');

// Fix unclosed elements
jsx = jsx.replace(/<br>/g, '<br />');

// Remove custom attributes
jsx = jsx.replace(/style-hover="[^"]*"/g, '');
jsx = jsx.replace(/hint-placeholder-val="[^"]*"/g, '');

fs.writeFileSync('/Users/chathurakumara/Desktop/janus web page/jsx_output.txt', jsx);
console.log('Done!');
