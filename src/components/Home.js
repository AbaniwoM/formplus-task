import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsInfoCircle } from 'react-icons/bs';
import AllTemplates from './All';
import { searchFilter } from '../helpers/Utils';
// import ReactPaginate from 'react-paginate';
import Loading from './Loading'

const Home = () => {
  
  const [ searchItem, setSearchItem ] = useState('');
//   const [ updateData, setUpdateData ] = useState([]);
  const [loading, setLoading]=useState(false);

  const [data, setData ] = useState([])

  const fetchDetails = async () => {
    try {
      const url = 'https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates';
      fetch( url, {
        method: 'GET',
      }).then(res => {
        setLoading(true);
        return res.json();
      }).then(res => {
        console.log(res);
        setData(res);
      })
      .catch(err => {
        console.log(err);
      })
      // setUserData(res.data.data);
    } catch (err) {
      // toast.error(err.message);
      console.log(err);
    }
  }
  useEffect (() => {
    fetchDetails()
  },[])
  console.log(loading);

  const handleSearch = (e) => {
    console.log('got here');
    setSearchItem(e.target.value);
    // setUpdateData(() => searchFilter(data, searchItem))
    setData(searchFilter(data, searchItem))
  }
  // useEffect (() => {
  //   // setData(searchFilter(data, searchItem))
  //   handleSearch();
  // },[]);
  
  // const fetchComments = async (currentPage) => {
  //   const res = await fetch(
  //     'https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates'
  //   );
  //   const data = await res.json();
  //   return data;
  // };

  // const handlePageClick = (data) => {
  //   console.log(data.selected);

  //   let currentPage =  data.selected + 1

  //   const detailsFormServer = fetchComments(currentPage);

  //   setData(detailsFormServer);
  // }
  
  return ( 
  <div className='container'>
    <div className='header'>
        <div className='search-templates'>
            <input placeholder='Search Templates' value={ searchItem } onChange={handleSearch} />
            <div className='search-icon'><FiSearch/></div>
        </div>
        <div className='filters'>
        <div className='sort-by'>Sort By:</div>
        <div className='category'>
            <div className='category-label'>Category</div>
            <select>
                <option>All</option>
                <option>E-commerce</option>
                <option>Education</option>
                <option>Health</option>
            </select>
        </div>
        <div className='order'>
            <div className='order-label'>Order</div>
            <select>
                <option>Default</option>
                <option>Ascending</option>
                <option>Descending</option>
            </select>
        </div>
        <div className='date'>
            <div className='date-label'>Date</div>
            <select>
                <option>Default</option>
                <option>01/02/22</option>
                <option>02/02/22</option>
                <option>03/02/22</option>
            </select>
        </div>
        </div>
    </div>
    <div className='information'>
        <div className='info-icon'>
            <BsInfoCircle />
        </div>
        <div className='info-text'>Tada! Get started with a free template. Can't find what you are looking for? Search from the 1000+ avilable templates</div>
    </div>
    
    <Loading />

    <AllTemplates all={data} searchFilter={searchFilter} />

    {/* Pagination */}
    {/* <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={14}
      marginPagesDisplayed={3}
      pageRangeDisplayed={3}
      // onPageChange={handlePageClick}
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
    />
     */}
  </div>
  )
};

export default Home;
