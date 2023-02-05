import React, { useEffect } from 'react'
import './newstyle.css'


function Filter ({setGenre,genre, setFiltered, product}){

    useEffect(()=> {
        if (genre === 0 ){
            setFiltered(product);
            return;
        }
        const filtered = product.filter((pr)=> pr.product_category_id._id.includes(genre));
        setFiltered(filtered)
    },[genre])

    return(
        <div className="container-fluid" style={{display:'flex',width:'18%', marginLeft:'30px'}}>
			<div className="col" id='fs_app'>
				<section className="col-12" id='fs_header_bar'>
					<div className="row">
						<div className="col-2">
							<i className="fa fa-chevron-left"></i>
						</div>
						<div className="col-10" id="fs_page_title">
							Filtreleme
						</div>
					</div>
				</section>

				<section className="col-12" id="fs_price_body">
					<div>
						<span className="heading" >
							Fiyat Aralığı
						</span>
						<div className="line"></div>
						<div className="line1"></div>
						<div>
							<ul>
								<li>25</li>
								<li>50</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="col-12" id="fs_distance_body">
					<span className="heading">
						Bilgisayar Çeşitleri
					</span>
					
					<div style={{width:'15em'}} className="contents">
						<div>
							<button style={{border:'none'}} onClick={()=> setGenre("0")}>Tümü</button>
						</div>
						<div>
							<button style={{border:'none'}} onClick={()=> setGenre("638e21faa8464ee0d5fc226b")}>Bilgisayar</button>
						</div>
						<div>
							<button style={{border:'none'}} onClick={()=> setGenre("639eb820a1bc0893999f2871")}>Gaming Laptop</button>
						</div>

						{/* <ul>
								<li>
									<span>Marka 1</span>
									<span className="text-right"></span>
								</li>
								<li>
									<span>Marka 2</span>
									<span className="text-right"></span>
								</li>
								<li>
									<span>Marka 3</span>
									<span className="text-right"></span>
								</li>
						</ul> */}
					</div>
					
				</section>
				<section className="col-12" id="fs_distance_body">
					<span className="heading">
						İşlemci Tipi
					</span>
					<div className="contents">
						<ul>
							<li>
								<span>İntel Core i7</span>
								<span className="text-right"></span>
							</li>
							<li>
								<span>İntel Core i9</span>
								<span className="text-right"></span>
							</li>
							<li>
								<span>AMD Ryzen 7</span>
								<span className="text-right"></span>
							</li>
							<li>
								<span>AMD Ryzen 9</span>
								<span className="text-right"></span>
							</li>
						</ul>
					</div>
				</section>
				<section className="col-12" id="fs_distance_body">
					<span className="heading">
						Ekran Kartı
					</span>
					<div className="contents">
						<ul>
							<li>
								<span>Nvidia GeForce RTX 3070 </span>
								<span className="text-right"></span>
							</li>
							<li>
								<span>Nvidia GeForce RTX 3060</span>
								<span className="text-right"></span>
							</li>
							<li>
								<span>Nvidia GeForce GTX 1650</span>
								<span className="text-right"></span>
							</li>
							<li>
								<span>AMD Radeon RX 5600</span>
								<span className="text-right"></span>
							</li>
							<li>
								<span>AMD Radeon RX 5700</span>
								<span className="text-right"></span>
							</li>
						</ul>
					</div>
				</section>
				<section className="col-12" id="fs_distance_body">
					<span className="heading">
						RAM (Sistem Belleği)
					</span>
					<div className="contents">
						<ul>
							<li>
								<span>8 GB</span>
								<span className="text-right"></span>
							</li>
							<li>
								<span>16 GB</span>
								<span className="text-right"></span>
							</li>
							<li>
								<span>32 GB</span>
								<span className="text-right"></span>
							</li>
							<li>
								<span>64 GB</span>
								<span className="text-right"></span>
							</li>
						</ul>
					</div>
				</section>

				

			</div>
		</div>
    )
}

export default Filter