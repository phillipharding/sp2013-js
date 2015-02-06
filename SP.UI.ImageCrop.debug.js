// JScript File


Type.registerNamespace('ImageCropApp');

ImageCropApp.ImageCropShell = function ImageCropApp_ImageCropShell() {
    this.$$d_$11_0 = Function.createDelegate(this, this.$11_0);
    this.$$d_$z_0 = Function.createDelegate(this, this.$z_0);
    this.$$d_$y_0 = Function.createDelegate(this, this.$y_0);
    this.$$d_$w_0 = Function.createDelegate(this, this.$w_0);
    this.$$d_$14_0 = Function.createDelegate(this, this.$14_0);
    this.$$d_$12_0 = Function.createDelegate(this, this.$12_0);
    this.$$d_$10_0 = Function.createDelegate(this, this.$10_0);
    this.$$d_$15_0 = Function.createDelegate(this, this.$15_0);
    this.$$d_$x_0 = Function.createDelegate(this, this.$x_0);
    this.$$d_$13_0 = Function.createDelegate(this, this.$13_0);
    this.$8_0 = 3;
}
ImageCropApp.ImageCropShell.prototype = {
    $i_0: null,
    $7_0: null,
    $4_0: null,
    $9_0: null,
    $E_0: null,
    $O_0: null,
    $H_0: null,
    $K_0: null,
    $P_0: null,
    $R_0: null,
    $T_0: null,
    $M_0: null,
    $d_0: null,
    $f_0: null,
    $g_0: null,
    $e_0: null,
    $p_0: null,
    $q_0: null,
    $o_0: null,
    $n_0: null,
    $16_0: null,
    $D_0: 0,
    $C_0: 0,
    $U_0: 0,
    $V_0: 0,
    $F_0: 0,
    $G_0: 0,
    $A_0: 0,
    $B_0: 0,
    $W_0: 0,
    $1_0: 0,
    $3_0: 0,
    $0_0: 0,
    $2_0: 0,
    $5_0: false,
    $L_0: false,
    $a_0: true,
    $c_0: 200,
    $N_0: 50,
    $6_0: 0,
    $l_0: 0,
    $r_0: 0,
    $J_0: 500,
    $I_0: 0,
    $Y_0: 0,
    $Z_0: 0,
    $h_0: 0,
    $X_0: 0,
    $m_0: false,
    
    init: function ImageCropApp_ImageCropShell$init(sourcePath, container, previewBox, lockAspectRatio, constrainedimageWidth, constrainedimageHeight, displayWidth, outX, outY, outW, outH, baseCssClass, postActions) {
        this.$i_0 = baseCssClass;
        this.$p_0 = outX;
        this.$q_0 = outY;
        this.$o_0 = outW;
        this.$n_0 = outH;
        this.$J_0 = displayWidth;
        this.$16_0 = sourcePath;
        this.$O_0 = container;
        this.$c_0 = constrainedimageWidth;
        this.$N_0 = constrainedimageHeight;
        this.$a_0 = lockAspectRatio;
        this.$H_0 = previewBox;
        this.$O_0.style.width = String.format('{0}px', this.$J_0);
        $addHandler(this.$O_0, 'mousedown', this.$$d_$13_0);
        this.$9_0 = document.createElement('div');
        this.$9_0.style.position = 'absolute';
        this.$9_0.style.overflow = 'hidden';
        this.$9_0.tabIndex = 5;
        this.$9_0.style.left = String.format('{0}px', 10);
        this.$9_0.style.top = String.format('{0}px', 10);
        $addHandler(this.$9_0, 'mousedown', this.$$d_$x_0);
        this.$E_0 = document.createElement('img');
        this.$9_0.appendChild(this.$E_0);
        var $$t_H = this;
        $addHandler(this.$E_0, 'load', function($p1_0) {
            $$t_H.$O_0.className = String.format('{0}-background', $$t_H.$i_0);
            $$t_H.$r_0 = $$t_H.$E_0.clientHeight;
            $$t_H.$l_0 = $$t_H.$E_0.clientWidth;
            $$t_H.$I_0 = $$t_H.$l_0 / $$t_H.$J_0;
            $$t_H.$E_0.style.position = 'absolute';
            $$t_H.$E_0.width = $$t_H.$J_0;
            $$t_H.$E_0.removeAttribute('height');
            $$t_H.$D_0 = $$t_H.$7_0.clientWidth;
            $$t_H.$C_0 = $$t_H.$7_0.clientHeight;
            var $v_0 = $$t_H.$D_0 / $$t_H.$C_0;
            if ($$t_H.$N_0 > 0 && $$t_H.$c_0 > 0) {
                $$t_H.$6_0 = $$t_H.$c_0 / $$t_H.$N_0;
            }
            else if ($$t_H.$m_0 && $$t_H.$X_0) {
                $$t_H.$6_0 = $$t_H.$h_0 / $$t_H.$X_0;
            }
            else {
                $$t_H.$6_0 = $v_0;
            }
            $$t_H.$O_0.style.height = String.format('{0}px', ($$t_H.$J_0 / $v_0));
            if ($$t_H.$m_0 && $$t_H.$Y_0 < $$t_H.$l_0 && $$t_H.$Z_0 < $$t_H.$r_0) {
                $$t_H.$Y_0 = ($$t_H.$Y_0 / $$t_H.$I_0);
                $$t_H.$Z_0 = ($$t_H.$Z_0 / $$t_H.$I_0);
                $$t_H.$h_0 = ($$t_H.$h_0 / $$t_H.$I_0);
                $$t_H.$X_0 = ($$t_H.$X_0 / $$t_H.$I_0);
                $$t_H.$b_0($$t_H.$Y_0, $$t_H.$Z_0, 0, $$t_H.$Y_0 + $$t_H.$h_0, $$t_H.$Z_0 + $$t_H.$X_0, 2, $$t_H.$a_0, $$t_H.$6_0);
                $$t_H.$5_0 = true;
                $$t_H.$L_0 = true;
            }
            else if ($$t_H.$N_0 > 0) {
                if ($$t_H.$6_0 < $v_0) {
                    var $v_1 = (($$t_H.$C_0 - 100) * $$t_H.$6_0);
                    $$t_H.$0_0 = 50;
                    $$t_H.$2_0 = $$t_H.$0_0 + $v_1;
                    $$t_H.$1_0 = ($$t_H.$D_0 / 2) - ($v_1 / 2);
                    $$t_H.$3_0 = $$t_H.$1_0 + ($v_1 / $$t_H.$6_0);
                }
                else {
                    var $v_2 = (($$t_H.$D_0 - 100) / $$t_H.$6_0);
                    $$t_H.$1_0 = 50;
                    $$t_H.$3_0 = $$t_H.$1_0 + ($v_2 * $$t_H.$6_0);
                    $$t_H.$0_0 = ($$t_H.$C_0 / 2) - ($v_2 / 2);
                    $$t_H.$2_0 = $$t_H.$0_0 + $v_2;
                }
                $$t_H.$5_0 = true;
                $$t_H.$L_0 = true;
            }
            else {
                $$t_H.$5_0 = false;
                $$t_H.$L_0 = false;
            }
            $$t_H.$Q_0();
            if (postActions) {
                eval(postActions);
            }
        });
        this.$7_0 = document.createElement('img');
        $addHandler(this.$7_0, 'mousedown', this.$$d_$13_0);
        this.$7_0.src = sourcePath;
        this.$7_0.width = this.$J_0;
        this.$7_0.removeAttribute('height');
        this.$O_0.appendChild(this.$7_0);
        this.$4_0 = document.createElement('div');
        this.$4_0.style.position = 'absolute';
        this.$4_0.appendChild(this.$9_0);
        this.$P_0 = this.$k_0(3);
        this.$4_0.appendChild(this.$P_0);
        this.$T_0 = this.$k_0(0);
        this.$4_0.appendChild(this.$T_0);
        this.$R_0 = this.$k_0(2);
        this.$4_0.appendChild(this.$R_0);
        this.$M_0 = this.$k_0(1);
        this.$4_0.appendChild(this.$M_0);
        this.$d_0 = this.$j_0(4);
        this.$4_0.appendChild(this.$d_0);
        this.$e_0 = this.$j_0(7);
        this.$4_0.appendChild(this.$e_0);
        this.$g_0 = this.$j_0(6);
        this.$4_0.appendChild(this.$g_0);
        this.$f_0 = this.$j_0(5);
        this.$4_0.appendChild(this.$f_0);
        this.$O_0.appendChild(this.$4_0);
        $addHandler(this.$4_0, 'keydown', this.$$d_$15_0);
        this.$H_0.style.display = 'none';
        this.$H_0.style.overflow = 'hidden';
        this.$H_0.style.position = 'relative';
        this.$K_0 = document.createElement('img');
        this.$K_0.src = this.$7_0.src;
        this.$K_0.style.position = 'absolute';
        this.$H_0.appendChild(this.$K_0);
        this.$S_0(null);
        this.$E_0.src = sourcePath;
    },
    
    $s_0: function ImageCropApp_ImageCropShell$$s_0($p0) {
        var $v_0 = '';
        var $v_1 = '';
        switch ($p0) {
            case 0:
                $v_0 = 'top';
                $v_1 = 'edge';
                break;
            case 1:
                $v_0 = 'bottom';
                $v_1 = 'edge';
                break;
            case 2:
                $v_0 = 'right';
                $v_1 = 'edge';
                break;
            case 3:
                $v_0 = 'left';
                $v_1 = 'edge';
                break;
            case 7:
                $v_0 = 'nw';
                $v_1 = 'handle';
                break;
            case 4:
                $v_0 = 'ne';
                $v_1 = 'handle';
                break;
            case 5:
                $v_0 = 'se';
                $v_1 = 'handle';
                break;
            case 6:
                $v_0 = 'sw';
                $v_1 = 'handle';
                break;
            default:
                return '';
        }
        return String.format('{0}-{2} {0}-{2}-{1}', this.$i_0, $v_0, $v_1);
    },
    
    setIntialRegion: function ImageCropApp_ImageCropShell$setIntialRegion(startX, startY, startW, startH) {
        this.$Y_0 = startX;
        this.$Z_0 = startY;
        this.$h_0 = startW;
        this.$X_0 = startH;
        this.$m_0 = (startX >= 0 && startY >= 0 && startW > 0 && startH > 0);
    },
    
    $k_0: function ImageCropApp_ImageCropShell$$k_0($p0) {
        var $v_0 = document.createElement('div');
        $v_0.style.position = 'absolute';
        $v_0.className = $v_0.className = this.$s_0($p0);
        switch ($p0) {
            case 0:
                $v_0.style.borderLeftStyle = 'none';
                $v_0.style.borderRightStyle = 'none';
                $v_0.style.borderBottomStyle = 'none';
                $v_0.style.marginTop = String.format('{0}px', 10);
                $v_0.style.marginLeft = String.format('{0}px', 10);
                break;
            case 1:
                $v_0.style.borderLeftStyle = 'none';
                $v_0.style.borderRightStyle = 'none';
                $v_0.style.borderTopStyle = 'none';
                $v_0.style.marginBottom = String.format('{0}px', 10);
                $v_0.style.marginLeft = String.format('{0}px', 10);
                break;
            case 2:
                $v_0.style.borderLeftStyle = 'none';
                $v_0.style.borderBottomStyle = 'none';
                $v_0.style.borderTopStyle = 'none';
                $v_0.style.marginTop = String.format('{0}px', 10);
                $v_0.style.marginRight = String.format('{0}px', 10);
                break;
            case 3:
                $v_0.style.borderRightStyle = 'none';
                $v_0.style.borderBottomStyle = 'none';
                $v_0.style.borderTopStyle = 'none';
                $v_0.style.marginTop = String.format('{0}px', 10);
                $v_0.style.marginLeft = String.format('{0}px', 10);
                break;
        }
        $addHandler($v_0, 'mousedown', this.$$d_$10_0);
        return $v_0;
    },
    
    $j_0: function ImageCropApp_ImageCropShell$$j_0($p0) {
        var $v_0 = document.createElement('div');
        $v_0.style.position = 'absolute';
        $v_0.style.display = 'none';
        $v_0.className = this.$s_0($p0);
        switch ($p0) {
            case 4:
                $v_0.style.cursor = 'ne-resize';
                $v_0.style.marginTop = String.format('{0}px', 10);
                $v_0.style.marginRight = String.format('{0}px', 10);
                $v_0.tabIndex = 2;
                break;
            case 5:
                $v_0.style.cursor = 'se-resize';
                $v_0.style.marginBottom = String.format('{0}px', 10);
                $v_0.style.marginRight = String.format('{0}px', 10);
                $v_0.tabIndex = 4;
                break;
            case 6:
                $v_0.style.cursor = 'sw-resize';
                $v_0.style.marginBottom = String.format('{0}px', 10);
                $v_0.style.marginLeft = String.format('{0}px', 10);
                $v_0.tabIndex = 3;
                break;
            case 7:
                $v_0.style.cursor = 'nw-resize';
                $v_0.style.marginTop = String.format('{0}px', 10);
                $v_0.style.marginLeft = String.format('{0}px', 10);
                $v_0.tabIndex = 1;
                break;
            default:
                break;
        }
        $addHandler($v_0, 'mousedown', this.$$d_$10_0);
        return $v_0;
    },
    
    $13_0: function ImageCropApp_ImageCropShell$$13_0($p0) {
        var $v_0 = $p0.offsetX;
        var $v_1 = $p0.offsetY;
        if ($p0.target === this.$4_0) {
            if ($v_0 - 10 < 0 || $v_1 - 10 < 0) {
                return;
            }
            $v_0 += this.$1_0;
            $v_1 += this.$0_0;
            if ($v_0 > this.$J_0 || $v_1 > (this.$J_0 * this.$r_0 / this.$l_0)) {
                return;
            }
        }
        this.$U_0 = $v_0;
        this.$V_0 = $v_1;
        this.$F_0 = $p0.clientX - $v_0;
        this.$G_0 = $p0.clientY - $v_1;
        $addHandler(document, 'mousemove', this.$$d_$12_0);
        $addHandler(document, 'mouseup', this.$$d_$14_0);
        this.$S_0('crosshair');
        $p0.stopPropagation();
        $p0.preventDefault();
    },
    
    $14_0: function ImageCropApp_ImageCropShell$$14_0($p0) {
        $removeHandler(document, 'mousemove', this.$$d_$12_0);
        $removeHandler(document, 'mouseup', this.$$d_$14_0);
        this.$5_0 = true;
        this.$L_0 = this.$1_0 !== this.$3_0 && this.$0_0 !== this.$2_0;
        this.$Q_0();
        this.$S_0(null);
        $p0.stopPropagation();
        $p0.preventDefault();
    },
    
    $12_0: function ImageCropApp_ImageCropShell$$12_0($p0) {
        if (Math.abs($p0.offsetX - this.$U_0) > 1 && Math.abs($p0.offsetY - this.$V_0) > 1) {
            this.$5_0 = true;
            this.$b_0(this.$U_0, this.$V_0, 0, $p0.clientX, $p0.clientY, 2, this.$a_0, this.$6_0);
            this.$Q_0();
        }
        $p0.stopPropagation();
        $p0.preventDefault();
    },
    
    $b_0: function ImageCropApp_ImageCropShell$$b_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
        var $v_0 = Math.max(0, Math.min(this.$D_0, $p3 - this.$F_0));
        var $v_1 = Math.max(0, Math.min(this.$C_0, $p4 - this.$G_0));
        if ($p5 === 2) {
            var $v_2 = $v_0 - $p0;
            var $v_3 = $v_1 - $p1;
            if ($p6) {
                var $v_4 = $v_2 / $v_3;
                if (Math.abs($v_4) < $p7) {
                    if (($v_0 > $p0 && $v_1 > $p1) || ($v_0 < $p0 && $v_1 < $p1)) {
                        $v_1 = ($p1 + ($v_2 / $p7));
                    }
                    else {
                        $v_1 = ($p1 - ($v_2 / $p7));
                    }
                }
                else {
                    if (($v_0 > $p0 && $v_1 > $p1) || ($v_0 < $p0 && $v_1 < $p1)) {
                        $v_0 = ($p0 + ($v_3 * $p7));
                    }
                    else {
                        $v_0 = ($p0 - ($v_3 * $p7));
                    }
                }
            }
            this.$1_0 = Math.min($p0, $v_0);
            this.$0_0 = Math.min($p1, $v_1);
            this.$3_0 = Math.max($p0, $v_0);
            this.$2_0 = Math.max($p1, $v_1);
        }
        else {
            if (!$p5) {
                var $v_5 = Math.abs($p0 - $v_0);
                if ($p6) {
                    var $v_6 = ($v_5 / $p7);
                    if ($v_6 > this.$C_0) {
                        $v_6 = this.$C_0;
                        $v_5 = ($v_6 * $p7);
                    }
                    var $v_7 = ($v_6 - $p2) / 2;
                    this.$0_0 = $p1 - $v_7;
                    this.$2_0 = $p1 + $v_6 - $v_7;
                    if (this.$0_0 < 0) {
                        this.$2_0 -= this.$0_0;
                        this.$0_0 = 0;
                    }
                    if (this.$2_0 > this.$C_0) {
                        this.$0_0 -= (this.$2_0 - this.$C_0);
                        this.$2_0 = this.$C_0;
                    }
                }
                if ($v_0 < $p0) {
                    this.$1_0 = $p0 - $v_5;
                    this.$3_0 = $p0;
                }
                else {
                    this.$1_0 = $p0;
                    this.$3_0 = $p0 + $v_5;
                }
            }
            else {
                var $v_8 = Math.abs($p1 - $v_1);
                if ($p6) {
                    var $v_9 = ($v_8 * $p7);
                    if ($v_9 > this.$D_0) {
                        $v_9 = this.$D_0;
                        $v_8 = ($v_9 / $p7);
                    }
                    var $v_A = ($v_9 - $p2) / 2;
                    this.$1_0 = $p0 - $v_A;
                    this.$3_0 = $p0 + $v_9 - $v_A;
                    if (this.$1_0 < 0) {
                        this.$3_0 -= this.$1_0;
                        this.$1_0 = 0;
                    }
                    if (this.$3_0 > this.$D_0) {
                        this.$1_0 -= (this.$3_0 - this.$D_0);
                        this.$3_0 = this.$D_0;
                    }
                }
                if ($v_1 < $p1) {
                    this.$0_0 = $p1 - $v_8;
                    this.$2_0 = $p1;
                }
                else {
                    this.$0_0 = $p1;
                    this.$2_0 = $p1 + $v_8;
                }
            }
        }
    },
    
    $S_0: function ImageCropApp_ImageCropShell$$S_0($p0) {
        if (!$p0) {
            this.$P_0.style.cursor = 'w-resize';
            this.$R_0.style.cursor = 'e-resize';
            this.$M_0.style.cursor = 's-resize';
            this.$T_0.style.cursor = 'n-resize';
            this.$9_0.style.cursor = 'move';
            this.$7_0.style.cursor = 'crosshair';
            this.$4_0.style.cursor = '';
        }
        else {
            this.$P_0.style.cursor = $p0;
            this.$R_0.style.cursor = $p0;
            this.$M_0.style.cursor = $p0;
            this.$T_0.style.cursor = $p0;
            this.$9_0.style.cursor = $p0;
            this.$7_0.style.cursor = $p0;
            this.$4_0.style.cursor = $p0;
        }
    },
    
    $Q_0: function ImageCropApp_ImageCropShell$$Q_0() {
        this.$4_0.style.display = (this.$5_0) ? '' : 'none';
        this.$H_0.style.display = (this.$5_0) ? '' : 'none';
        this.$P_0.style.display = (this.$5_0) ? '' : 'none';
        this.$R_0.style.display = (this.$5_0) ? '' : 'none';
        this.$T_0.style.display = (this.$5_0) ? '' : 'none';
        this.$M_0.style.display = (this.$5_0) ? '' : 'none';
        this.$d_0.style.display = (this.$L_0) ? '' : 'none';
        this.$f_0.style.display = (this.$L_0) ? '' : 'none';
        this.$g_0.style.display = (this.$L_0) ? '' : 'none';
        this.$e_0.style.display = (this.$L_0) ? '' : 'none';
        this.$7_0.className = (this.$5_0) ? String.format('{0}-ghost', this.$i_0) : '';
        var $v_0 = this.$3_0 - this.$1_0;
        var $v_1 = this.$2_0 - this.$0_0;
        this.$4_0.style.left = String.format('{0}px', this.$1_0 - 10);
        this.$4_0.style.top = String.format('{0}px', this.$0_0 - 10);
        this.$4_0.style.width = String.format('{0}px', $v_0 + 20);
        this.$4_0.style.height = String.format('{0}px', $v_1 + 20);
        this.$E_0.style.left = String.format('{0}px', -this.$1_0);
        this.$E_0.style.top = String.format('{0}px', -this.$0_0);
        this.$9_0.style.width = String.format('{0}px', $v_0);
        this.$9_0.style.height = String.format('{0}px', $v_1);
        if ($v_0) {
            var $v_2;
            if (this.$N_0 > 0) {
                $v_2 = this.$N_0 / $v_1;
                this.$H_0.style.height = String.format('{0}px', this.$N_0);
                this.$H_0.style.width = String.format('{0}px', $v_0 * $v_2);
            }
            else {
                $v_2 = this.$c_0 / $v_0;
                this.$H_0.style.height = String.format('{0}px', $v_1 * $v_2);
                this.$H_0.style.width = String.format('{0}px', this.$c_0);
            }
            this.$K_0.height = (this.$7_0.height * $v_2);
            this.$K_0.width = (this.$7_0.width * $v_2);
            this.$K_0.style.left = String.format('{0}px', -this.$1_0 * $v_2);
            this.$K_0.style.top = String.format('{0}px', -this.$0_0 * $v_2);
        }
        this.$P_0.style.height = String.format('{0}px', $v_1);
        this.$R_0.style.height = String.format('{0}px', $v_1);
        this.$T_0.style.width = String.format('{0}px', $v_0);
        this.$M_0.style.width = String.format('{0}px', $v_0);
        if (this.$p_0) {
            this.$p_0.value = (this.$5_0) ? Math.round(this.$1_0 * this.$I_0).toString() : '';
        }
        if (this.$q_0) {
            this.$q_0.value = (this.$5_0) ? Math.round(this.$0_0 * this.$I_0).toString() : '';
        }
        if (this.$o_0) {
            this.$o_0.value = (this.$5_0) ? Math.round($v_0 * this.$I_0).toString() : '';
        }
        if (this.$n_0) {
            this.$n_0.value = (this.$5_0) ? Math.round($v_1 * this.$I_0).toString() : '';
        }
    },
    
    $x_0: function ImageCropApp_ImageCropShell$$x_0($p0) {
        this.$U_0 = $p0.clientX;
        this.$V_0 = $p0.clientY;
        $addHandler(document, 'mousemove', this.$$d_$w_0);
        $addHandler(document, 'mouseup', this.$$d_$y_0);
        this.$S_0('move');
        $p0.stopPropagation();
        $p0.preventDefault();
    },
    
    $y_0: function ImageCropApp_ImageCropShell$$y_0($p0) {
        $removeHandler(document, 'mousemove', this.$$d_$w_0);
        $removeHandler(document, 'mouseup', this.$$d_$y_0);
        this.$S_0(null);
        $p0.stopPropagation();
        $p0.preventDefault();
    },
    
    $w_0: function ImageCropApp_ImageCropShell$$w_0($p0) {
        var $v_0 = $p0.clientX - this.$U_0;
        var $v_1 = $p0.clientY - this.$V_0;
        this.$t_0($v_0, $v_1);
        this.$Q_0();
        $p0.stopPropagation();
        $p0.preventDefault();
    },
    
    $t_0: function ImageCropApp_ImageCropShell$$t_0($p0, $p1) {
        $p0 = Math.max(-this.$1_0, $p0);
        $p1 = Math.max(-this.$0_0, $p1);
        if (this.$3_0 + $p0 > this.$D_0) {
            $p0 = this.$D_0 - this.$3_0;
        }
        if (this.$2_0 + $p1 > this.$C_0) {
            $p1 = this.$C_0 - this.$2_0;
        }
        this.$1_0 += $p0;
        this.$0_0 += $p1;
        this.$3_0 += $p0;
        this.$2_0 += $p1;
        this.$U_0 += $p0;
        this.$V_0 += $p1;
    },
    
    $10_0: function ImageCropApp_ImageCropShell$$10_0($p0) {
        this.$u_0($p0.target, $p0.clientX, $p0.clientY, $p0.offsetX, $p0.offsetY, true);
        $addHandler(document, 'mousemove', this.$$d_$z_0);
        $addHandler(document, 'mouseup', this.$$d_$11_0);
        $p0.stopPropagation();
        $p0.preventDefault();
    },
    
    $u_0: function ImageCropApp_ImageCropShell$$u_0($p0, $p1, $p2, $p3, $p4, $p5) {
        var $v_0 = null;
        if ($p0 === this.$P_0) {
            this.$A_0 = this.$3_0;
            this.$B_0 = this.$0_0;
            this.$W_0 = this.$2_0 - this.$0_0;
            this.$G_0 = $p2 - this.$0_0 - $p4;
            this.$F_0 = $p1 - this.$1_0;
            $v_0 = 'w-resize';
            this.$8_0 = 3;
        }
        else if ($p0 === this.$R_0) {
            this.$A_0 = this.$1_0;
            this.$B_0 = this.$0_0;
            this.$W_0 = this.$2_0 - this.$0_0;
            this.$G_0 = $p2 - this.$0_0 - $p4;
            this.$F_0 = $p1 - this.$3_0;
            $v_0 = 'e-resize';
            this.$8_0 = 2;
        }
        else if ($p0 === this.$T_0) {
            this.$A_0 = this.$1_0;
            this.$B_0 = this.$2_0;
            this.$W_0 = this.$3_0 - this.$1_0;
            this.$G_0 = $p2 - this.$0_0;
            this.$F_0 = $p1 - this.$1_0 - $p3;
            $v_0 = 'n-resize';
            this.$8_0 = 0;
        }
        else if ($p0 === this.$M_0) {
            this.$A_0 = this.$1_0;
            this.$B_0 = this.$0_0;
            this.$W_0 = this.$3_0 - this.$1_0;
            this.$G_0 = $p2 - this.$2_0;
            this.$F_0 = $p1 - this.$1_0 - $p3;
            $v_0 = 's-resize';
            this.$8_0 = 1;
        }
        else if ($p0 === this.$d_0 || $p0.parentNode === this.$d_0) {
            this.$A_0 = this.$1_0;
            this.$B_0 = this.$2_0;
            this.$F_0 = $p1 - this.$3_0;
            this.$G_0 = $p2 - this.$0_0;
            $v_0 = 'ne-resize';
            this.$8_0 = 4;
        }
        else if ($p0 === this.$f_0 || $p0.parentNode === this.$f_0) {
            this.$A_0 = this.$1_0;
            this.$B_0 = this.$0_0;
            this.$F_0 = $p1 - this.$3_0;
            this.$G_0 = $p2 - this.$2_0;
            $v_0 = 'se-resize';
            this.$8_0 = 5;
        }
        else if ($p0 === this.$g_0 || $p0.parentNode === this.$g_0) {
            this.$A_0 = this.$3_0;
            this.$B_0 = this.$0_0;
            this.$F_0 = $p1 - this.$1_0;
            this.$G_0 = $p2 - this.$2_0;
            $v_0 = 'sw-resize';
            this.$8_0 = 6;
        }
        else if ($p0 === this.$e_0 || $p0.parentNode === this.$e_0) {
            this.$A_0 = this.$3_0;
            this.$B_0 = this.$2_0;
            this.$F_0 = $p1 - this.$1_0;
            this.$G_0 = $p2 - this.$0_0;
            $v_0 = 'nw-resize';
            this.$8_0 = 7;
        }
        else {
            return false;
        }
        if ($p5) {
            this.$S_0($v_0);
        }
        if (!this.$a_0 && this.$2_0 !== this.$0_0) {
            this.$6_0 = ((this.$3_0 - this.$1_0) / (this.$2_0 - this.$0_0));
        }
        return true;
    },
    
    $11_0: function ImageCropApp_ImageCropShell$$11_0($p0) {
        $removeHandler(document, 'mousemove', this.$$d_$z_0);
        $removeHandler(document, 'mouseup', this.$$d_$11_0);
        this.$S_0(null);
        $p0.stopPropagation();
        $p0.preventDefault();
    },
    
    $z_0: function ImageCropApp_ImageCropShell$$z_0($p0) {
        var $v_0 = this.$a_0 || $p0.shiftKey;
        switch (this.$8_0) {
            case 5:
            case 6:
            case 4:
            case 7:
                this.$b_0(this.$A_0, this.$B_0, 0, $p0.clientX, $p0.clientY, 2, $v_0, this.$6_0);
                break;
            case 1:
            case 0:
                this.$b_0(this.$A_0, this.$B_0, this.$W_0, $p0.clientX, $p0.clientY, 1, $v_0, this.$6_0);
                break;
            case 2:
            case 3:
                this.$b_0(this.$A_0, this.$B_0, this.$W_0, $p0.clientX, $p0.clientY, 0, $v_0, this.$6_0);
                break;
        }
        this.$Q_0();
        $p0.stopPropagation();
        $p0.preventDefault();
    },
    
    $15_0: function ImageCropApp_ImageCropShell$$15_0($p0) {
        var $v_0 = 0;
        var $v_1 = 0;
        var $v_2 = ($p0.ctrlKey) ? 5 : 1;
        switch ($p0.keyCode) {
            case 40:
                $v_1 = $v_2;
                break;
            case 38:
                $v_1 = -$v_2;
                break;
            case 39:
                $v_0 = $v_2;
                break;
            case 37:
                $v_0 = -$v_2;
                break;
            default:
                return;
        }
        var $v_3 = $p0.target;
        if ($v_3 === this.$9_0) {
            this.$t_0($v_0, $v_1);
            this.$Q_0();
            $p0.preventDefault();
            $p0.stopPropagation();
            return;
        }
        if (this.$u_0($v_3, 0, 0, 0, 0, false)) {
            var $v_4 = this.$a_0 || $p0.shiftKey;
            if ($v_4) {
                if (!$v_0) {
                    $v_0 = (this.$8_0 === 7 || this.$8_0 === 5) ? $v_1 : -$v_1;
                }
                else {
                    $v_1 = (this.$8_0 === 7 || this.$8_0 === 5) ? $v_0 : -$v_0;
                }
            }
            this.$b_0(this.$A_0, this.$B_0, 0, $v_0, $v_1, 2, $v_4, this.$6_0);
            this.$Q_0();
            $p0.preventDefault();
            $p0.stopPropagation();
        }
    }
}


ImageCropApp.ImageCropShell.registerClass('ImageCropApp.ImageCropShell');

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
    Sys.Application.notifyScriptLoaded();
}
if(typeof(NotifyScriptLoadedAndExecuteWaitingJobs) == "function"){
    NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.imagecrop.js");
}
