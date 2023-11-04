import React from "react";
import styles from "../../styles/Header.module.css";
import dropdownStyles from "../../styles/Header-dropdown-item.module.css";

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/assets/header/logo.svg" alt="logo"/>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li className={`${styles['menu-item']} ${styles['dropdown-container']}`}>
                        <span className={styles['menu-item-title']}>Products</span>
                        <div className={styles['dropdown-icon']}></div>
                        <div className={styles['dropdown-content']}>
                            <div className={styles['dropdown-visible-content']}>
                                <div className={dropdownStyles['dropdown-product-container']}>
                                    <div className={dropdownStyles['dropdown-product-logo']}>
                                        <img src="/assets/header/product.svg" alt="product"/>
                                    </div>
                                    <div className={dropdownStyles['dropdown-product-info']}>
                                        <div className={dropdownStyles['dropdown-product-info-title']}>
                                            <span>Virtual servers</span>
                                            <img className={dropdownStyles['dropdown-product-info-title-icon']}
                                                 src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                        </div>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>with GPUs</p>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>Adjust
                                            resources and workloads
                                            with our virtual servers.</p>
                                    </div>
                                </div>
                                <div className={dropdownStyles['dropdown-product-container']}>
                                    <div className={dropdownStyles['dropdown-product-logo']}>
                                        <img src="/assets/header/product.svg" alt="product"/>
                                    </div>
                                    <div className={dropdownStyles['dropdown-product-info']}>
                                        <div className={dropdownStyles['dropdown-product-info-title']}>
                                            <span>Virtual servers</span>
                                            <img className={dropdownStyles['dropdown-product-info-title-icon']}
                                                 src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                        </div>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>with GPUs</p>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>Adjust
                                            resources and workloads
                                            with our virtual servers.</p>
                                    </div>
                                </div>
                                <div className={dropdownStyles['dropdown-product-container']}>
                                    <div className={dropdownStyles['dropdown-product-logo']}>
                                        <img src="/assets/header/product.svg" alt="product"/>
                                    </div>
                                    <div className={dropdownStyles['dropdown-product-info']}>
                                        <div className={dropdownStyles['dropdown-product-info-title']}>
                                            <span>Virtual servers</span>
                                            <img className={dropdownStyles['dropdown-product-info-title-icon']}
                                                 src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                        </div>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>with GPUs</p>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>Adjust
                                            resources and workloads
                                            with our virtual servers.</p>
                                    </div>
                                </div>
                                <div className={dropdownStyles['dropdown-product-container']}>
                                    <div className={dropdownStyles['dropdown-product-logo']}>
                                        <img src="/assets/header/product.svg" alt="product"/>
                                    </div>
                                    <div className={dropdownStyles['dropdown-product-info']}>
                                        <div className={dropdownStyles['dropdown-product-info-title']}>
                                            <span>Virtual servers</span>
                                            <img className={dropdownStyles['dropdown-product-info-title-icon']}
                                                 src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                        </div>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>with GPUs</p>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>Adjust
                                            resources and workloads
                                            with our virtual servers.</p>
                                    </div>
                                </div>
                                <div className={dropdownStyles['dropdown-product-container']}>
                                    <div className={dropdownStyles['dropdown-product-logo']}>
                                        <img src="/assets/header/product.svg" alt="product"/>
                                    </div>
                                    <div className={dropdownStyles['dropdown-product-info']}>
                                        <div className={dropdownStyles['dropdown-product-info-title']}>
                                            <span>Virtual servers</span>
                                            <img className={dropdownStyles['dropdown-product-info-title-icon']}
                                                 src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                        </div>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>with GPUs</p>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>Adjust
                                            resources and workloads
                                            with our virtual servers.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li className={`${styles['menu-item']} ${styles['dropdown-container']}`}>
                        <span className={styles['menu-item-title']}>Services</span>
                        <div className={styles['dropdown-icon']}></div>
                        <div className={styles['dropdown-content']}>
                            <div className={styles['dropdown-visible-content']}>
                                <div className={dropdownStyles['dropdown-product-container']}>
                                    <div className={dropdownStyles['dropdown-product-logo']}>
                                        <img src="/assets/header/product.svg" alt="product"/>
                                    </div>
                                    <div className={dropdownStyles['dropdown-product-info']}>
                                        <div className={dropdownStyles['dropdown-product-info-title']}>
                                            <span>Virtual servers</span>
                                            <img className={dropdownStyles['dropdown-product-info-title-icon']}
                                                 src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                        </div>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>with
                                            GPUs</p>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>Adjust
                                            resources and
                                            workloads with our virtual servers.</p>
                                    </div>
                                </div>
                                <div className={dropdownStyles['dropdown-product-container']}>
                                    <div className={dropdownStyles['dropdown-product-logo']}>
                                        <img src="/assets/header/product.svg" alt="product"/>
                                    </div>
                                    <div className={dropdownStyles['dropdown-product-info']}>
                                        <div className={dropdownStyles['dropdown-product-info-title']}>
                                            <span>Virtual servers</span>
                                            <img className={dropdownStyles['dropdown-product-info-title-icon']}
                                                 src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                        </div>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>with
                                            GPUs</p>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>Adjust
                                            resources and
                                            workloads with our virtual servers.</p>
                                    </div>
                                </div>
                                <div className={dropdownStyles['dropdown-product-container']}>
                                    <div className={dropdownStyles['dropdown-product-logo']}>
                                        <img src="/assets/header/product.svg" alt="product"/>
                                    </div>
                                    <div className={dropdownStyles['dropdown-product-info']}>
                                        <div className={dropdownStyles['dropdown-product-info-title']}>
                                            <span>Virtual servers</span>
                                            <img className={dropdownStyles['dropdown-product-info-title-icon']}
                                                 src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                        </div>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>with
                                            GPUs</p>
                                        <p className={dropdownStyles['dropdown-product-info-description']}>Adjust
                                            resources and
                                            workloads with our virtual servers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles['menu-item']}>
                        <span className={styles['menu-item-title']}>ML Cloud</span>
                    </li>
                    <li className={styles['menu-item']}>
                        <span className={styles['menu-item-title']}>Blog</span>
                    </li>
                    <li className={styles['menu-item']}>
                        <span className={styles['menu-item-title']}>Contact us</span>
                    </li>
                </ul>
            </div>
            <div className={styles['authentication']}>
                <span>Log In</span>
                <button>Get Started</button>
            </div>
        </header>
    );

};

export default Header;