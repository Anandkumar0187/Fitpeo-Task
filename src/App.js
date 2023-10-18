import './App.css';
import { FaBitbucket, FaKey, FaUser, FaWallet } from 'react-icons/fa';
import { TbBrandHipchat, TbHexagonLetterO } from 'react-icons/tb';
import { LuBadgePercent } from 'react-icons/lu';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { SlHandbag, SlWallet } from 'react-icons/sl';
import { PiHandWavingFill } from 'react-icons/pi';

function App() {
  const file = [
    {
        id: 1,
        name : 'Abstract 3D',
        content : 'Lorem ipsum dolor sit met, consectetur adipiscing elit.',
        src : './images/first.jpg',
        stock: '32 in stock',
        price: '$ 45.99',
        total_sales : '20'
    },
    {
        id : 2,
        name : 'Sarphens Illustration',
        content : 'Lorem ipsum dolor sit met, consectetur adipiscing elit.',
        src : './images/second.jpg',
        stock: '32 in stock',
        price: '$ 45.99',
        total_sales : '20'
    },
    {
      id : 3,
      name : 'Sarphens Illustration',
      content : 'Lorem ipsum dolor sit met, consectetur adipiscing elit.',
      src : './images/second.jpg',
      stock: '32 in stock',
      price: '$ 45.99',
      total_sales : '20'
  }
];
  return (
    <div className="App">
      <div className="side-bar">
        <h2 id="side-header"><TbHexagonLetterO/> &nbsp; Dashboard</h2>
        <div id="side-body">
          <div className="side-body-header"><FaKey/> &nbsp; Dashboard</div>
          <div className="side-body"><FaBitbucket/> &nbsp; Product <button>&rsaquo;</button></div>
          <div className="side-body"><FaUser/> &nbsp; Customers <button>&rsaquo;</button></div>
          <div className="side-body"><FaWallet/> &nbsp; Income <button>&rsaquo;</button></div>
          <div className="side-body"><LuBadgePercent/> &nbsp; Promote <button>&rsaquo;</button></div>
          <div className="side-body"><TbBrandHipchat/> &nbsp; Help <button>&rsaquo;</button></div>
        </div>
        <div className='profile'>
          <div className='box'>
            <img src={require('./images/profile.jpg')} alt=''/>
            <div className='profile-info'>
              <div id='p1'>Evane</div>
              <div id='p2'>Project Manager</div>
            </div>
            <button>&#8964;</button>
          </div>
        </div>
      </div>
      <div className="main">
        <div className='box'>
          <div className='header'>
            <div>Hello Shahrukh <div><PiHandWavingFill/></div></div>
            <div className='input'>
            <span className="search-icon">&#128269;</span>
              <input placeholder='Search' />
            </div>
          </div>
          <div className='info-box'>
            <div className='basic-info'>
              <div className='common earning'><AiOutlineDollarCircle/></div>
              <div id='info-text'>
                <div>Earning</div>
                <div>$198k</div>
                <div>
                  <div id='up'>&#129121;37.8%</div><div>this month</div>
                </div>
              </div>
            </div>
            <div className='basic-info'>
            <div className='common orders'><CgNotes/></div>
              <div id='info-text'>
                <div>Orders</div>
                <div>$2.4k</div>
                <div>
                  <div id='down'>&#129123;2%</div>this month
                </div>
              </div>
            </div>
            <div className='basic-info'>
            <div className='common balance'><SlWallet/></div>
              <div id='info-text'>
                <div>Balance</div>
                <div>$2.4k</div>
                <div>
                  <div id='down'>&#129123;2%</div>this month
                </div>
              </div>
            </div>
            <div className='basic-info'>
              <div className='common total-sales'><SlHandbag/></div>
              <div id='info-text'>
                <div>Total Sales</div>
                <div>$89k</div>
                <div>
                  <div id='up'>&#129121;11%</div>this month
                </div>
              </div>
            </div>
          </div>
          <div className='middle'>
            <div className='graph'>
              <div className='header'>
                <div><div>Overview</div><div>Monthly Earning</div></div>
                <div className='options'>
                <select>
                  <option>Quaterly</option>
                  <option>Half-yearly</option>
                  <option>Yearly</option>
                </select>
                </div>
              </div>
              <div className='body'>
                <div className='months' id='jan'></div>
                <div className='months' id='feb'></div>
                <div className='months' id='mar'></div>
                <div className='months' id='apr'></div>
                <div className='months' id='may'></div>
                <div className='months' id='jun'></div>
                <div className='months' id='jul'></div>
                <div className='months' id='aug'></div>
                <div className='months' id='sep'></div>
                <div className='months' id='oct'></div>
                <div className='months' id='nov'></div>
                <div className='months' id='dec'></div>
              </div>
              <div className='body2'>
                <div>Jan</div>
                <div>Feb</div>
                <div>Mar</div>
                <div>Apr</div>
                <div>May</div>
                <div>Jun</div>
                <div>Jul</div>
                <div>Aug</div>
                <div>Sep</div>
                <div>Oct</div>
                <div>Nov</div>
                <div>Dec</div>
              </div>
            </div>
            <div className='pieChart'>
              <div className='header'>
                <div>Customers</div><div>Customers that buy products</div>
              </div>
              <div className='chart-body'>
                <div>
                  <div>
                    <div>
                     <h3> 65 %</h3> <p>total new customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='product-sell'>
            <div className='header'>
              <div className='header1'>
                <div id='product-head'>Product Sell</div>
                  <div className='header1-right'>
                    <input placeholder='Search'/>
                    <select>
                      <option>Last 30 days</option>
                      <option>Last 20 days</option>
                      <option>Last 10 days</option>
                    </select>
                  </div>
                </div>
                <div className='header2'>
                  <div id='header2-head'>Product Name</div>
                  <div className='header2-right'>
                    <div>stock</div>
                    <div>Price</div>
                    <div>Total Sales</div>
                  </div>
                </div>
            </div>
            { file.map((item)=> (
                <div key={item.id} className='grid-container'>
                <div className='grid-left'>
                  <img className='images' src={require(`${item.src}`)} alt='no pic'/>
                  <div className='image-content'>
                    <div>{item.name}</div>
                    <div>{item.content}</div>
                  </div>
                </div>
                <div className='grid-right1'>{item.stock}</div>
                <div className='grid-right2'>{item.price}</div>
                <div className='grid-right3'>{item.total_sales}</div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
